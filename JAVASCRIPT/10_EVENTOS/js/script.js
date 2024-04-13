// 1 - adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
    console.log("Clicou aqui!");
})

// 2 - removendo evento
const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
    console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMensagem);
})

// 3 - argumetno do evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (evento) => {
    console.log(evento);
    console.log(evento.offsetX);
    console.log(evento.pointerType);
    console.log(evento.target);
})

// 4 -propagação (Para não ativar 2 eventos com apenas uma ação)
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Evento 2");
});

// 5 - Removendo evento padrão
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("Não alterou a página");
});

// 6 - eventos de tecla
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`);
});

document.addEventListener("keydown", (e) => {
    console.log(`Apertou a tecla ${e.key}`);
});

// 7 - Eventos de mouse
const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
    console.log("Pressionou o botão");
})

mouseEvents.addEventListener("mouseup", () => {
    console.log("Soltou o botão");
})

mouseEvents.addEventListener("dblclick", () => {
    console.log("Clique duplo");
})

// 8 - movimento do mouse
document.addEventListener("mousemove", (e) => {
    // console.log(`No eixo X: ${e.x}`);
    // console.log(`No eixo X: ${e.y}`);
});

// 9 - evento por scroll
window.addEventListener("scroll", (e) => {
    if (window.scrollY > 200) {
        console.log("Passamos de 200px");
    }
});

// 10 - Evento de focus/blur
const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
    console.log("Entrou no input");
});

input.addEventListener("blur", (e) => {
    console.log("Saio no input");
});

// tem nagadores que não aceitam isso
// 11 - Carregamento de página
window.addEventListener("load", (e) => {
    console.log("A página carregou!");
});

window.addEventListener("beforeload", (e) => {
    e.preventDefault();
});

// 12 - debounce
const debounce = (f, delay) => {
    let timeout

    return (...arguments) => {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            f.apply(arguments); //invoca o arguments
        }, delay);
    };
};

window.addEventListener("mousemove", debounce(() => {
    console.log("Executando a cada 400ms");
}, 400)
);


