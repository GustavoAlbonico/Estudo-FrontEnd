// Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const searchInput = document.querySelector("#search-input");

//Botoes
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const eraseBtn = document.querySelector("#erase-todo");
const filterBtn = document.querySelector("#filter-select");

let oldInputValue;
// Funções
const saveTodo = (text) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    //Finish
    const finishBtn = document.createElement("button");
    finishBtn.classList.add("finish-todo");
    finishBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(finishBtn);

    //Edit
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn);

    //remove
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-todo");
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(removeBtn);

    todoList.appendChild(todo);

    todoInput.value = '';
    todoInput.focus();
}

const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

const updateTodo = (editInputValue) => {
    
    const todos = todoList.querySelectorAll(".todo");

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");

        if(todoTitle.innerText === oldInputValue){
            todoTitle.innerText = editInputValue;
        }
    })
}

// Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if(inputValue) {
        saveTodo(inputValue);
    }
});


todoList.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;
  
    if (parentEl && parentEl.querySelector("h3")) {
      todoTitle = parentEl.querySelector("h3").innerText;
    }
  
    if (targetEl.classList.contains("finish-todo")) {
      parentEl.classList.toggle("done");
  
      updateTodoStatusLocalStorage(todoTitle);
    }
  
    if (targetEl.classList.contains("remove-todo")) {
      parentEl.remove();
    }
  
    if (targetEl.classList.contains("edit-todo")) {
      toggleForms();
    
      editInput.value = todoTitle;
      oldInputValue = todoTitle;
    }
  });
  

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForms();
});

editForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const editInputValue = editInput.value;

    if(editInputValue){
        updateTodo(editInputValue);
    }
    toggleForms();
});
