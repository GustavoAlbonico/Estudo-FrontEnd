// elementos
const notesContainer =  document.querySelector("#notes-container");

const noteInput = document.querySelector("#note-content");

const addNoteBtn = document.querySelector(".add-note");

const searchInput = document.querySelector("#search-input");

const exportBtn =  document.querySelector("#export-notes");

//Funções
function showNotes() {
    cleanNotes();

    getNotes().forEach((note) => {
        const noteElement = createNote(note.id, note.content, note.fixed);
    
        notesContainer.appendChild(noteElement);
    });
};

function cleanNotes(){
    notesContainer.replaceChildren([])
}

function addNote() {
    const notes = getNotes();

    const noteObject = {
        id: generateId(),
        content: noteInput.value,
        fixed: false,
    };

    const noteElement =  createNote(noteObject.id, noteObject.content);

    notesContainer.appendChild(noteElement);

    notes.push(noteObject);

    saveNotes(notes);

    noteInput.value = "";
}

function createNote(id,content,fixed){
    const element = document.createElement("div");

    element.classList.add("note");

    const textarea = document.createElement("textarea");

    textarea.value = content;

    textarea.placeholder = "Adicione algum texto...";

    element.appendChild(textarea);

    const pinIcon = document.createElement("i");

    pinIcon.classList.add(...["bi", "bi-pin"]);

    element.appendChild(pinIcon);

    const deleteIcon = document.createElement("i");

    deleteIcon.classList.add(...["bi", "bi-x-lg"]);

    element.appendChild(deleteIcon);

    const duplicateIcon = document.createElement("i");

    duplicateIcon.classList.add(...["bi", "bi-file-earmark-plus"]);

    element.appendChild(duplicateIcon);

    if(fixed){
        element.classList.add("fixed");
    }

    //eventos do elemento
    element.querySelector("textarea").addEventListener("change", (e) => {
        
        const noteContent = e.target.value;

        updateNote(id, noteContent);

    });

    element.querySelector(".note i:nth-of-type(1)").addEventListener("click", () => {
        toggleFixNote(id);
    });

    element.querySelector(".note i:nth-of-type(2)").addEventListener("click", () => {
        deleteNote(id, element);
    });

    element.querySelector(".note i:nth-of-type(3)").addEventListener("click", () => {
        copyNote(id);
    });

    return element;
}

function deleteNote(id, element){

    const notes = getNotes().filter((note) => note.id !== id);

    saveNotes(notes);

    notesContainer.removeChild(element);
}

function copyNote(id) {

    const notes = getNotes();

    const targetNote = notes.filter((note) => note.id === id)[0];

    const noteObject = {
        id: generateId(),
        content: targetNote.content,
        fixed: targetNote.fixed,
    }

    const noteElement =  createNote(
        noteObject.id,
        noteObject.content,
        noteObject.fixed);

    notesContainer.appendChild(noteElement);

    notes.push(noteObject);

    saveNotes(notes);

    showNotes();
}

function updateNote(id, newContent) {

    const notes = getNotes();

    const targetNote =  notes.filter((note) => note.id === id)[0];

    targetNote.content = newContent;

    saveNotes(notes);
}

function toggleFixNote(id){
    const notes = getNotes();

    const targetNote = notes.filter((note) => note.id === id)[0];

    targetNote.fixed = !targetNote.fixed;

    saveNotes(notes);

    showNotes();
}

// Local storage
function getNotes() {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]")

    const orderedNotes = notes.sort((a, b) => a.fixed > b.fixed ? -1 : 1);

    return orderedNotes;
}

function saveNotes(notes) {
    localStorage.setItem("notes",JSON.stringify(notes))
}

function searchNotes(search){

    const searchResults = getNotes().filter((note) => {
       return note.content.includes(search);
    });

    if(search !== ""){
        cleanNotes();

        searchResults.forEach((note) => {
            const noteElement = createNote(note.id, note.content, note.fixed);
            notesContainer.appendChild(noteElement);
        });

        return;
    }

    cleanNotes();

    showNotes();
}

function generateId(){
    return Math.floor(Math.random() * 5000);
}

function exportData() {
    
    const notes = getNotes();

    const csvString = [
        ["ID","Conteúdo","Fixado?"],
        ...notes.map((note) => [note.id,note.content,note.fixed]), //... para fazer ele retornar para dentro do array
    ].map((e) => e.join(","))//transforma em um array e separa cada elemento por ,
    .join("\n"); //faz mostrar a mesma string soq pula linha referenciando cada linha da tabela

    const element = document.createElement("a"); //cria um elemento ficticio

    element.href = "data:text/csv;charset=utf-8," + encodeURI(csvString);

    element.target = "_blank";

    element.download = "notes.csv"; // nome do arquivo

    element.click(); //faz o elemento ser clicado
}

//Eventos
addNoteBtn.addEventListener("click", () => addNote());

searchInput.addEventListener("keyup", (e) => {

    const search = e.target.value;

    searchNotes(search);
})

noteInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        addNote();
    }
});

exportBtn.addEventListener("click", () => {
    exportData();
})

//Inicialização
showNotes();