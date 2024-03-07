// 1 -  variaveis
let nome = "Matheus";

console.log(nome);
console.log("Matheus");

nome = "Matheus Da Silva";

console.log(nome);

const idade = 18;

console.log(idade);

console.log(typeof nome);
console.log(typeof idade);

// 2 - mais sobre variaveis

let a = 10 , b = 20 , c = 30;

console.log(a,b,c);

const nomeCompleto = "Matheus Batisti";

const nomecompleto = "Joao da silva";

console.log(nomeCompleto);
console.log(nomecompleto);

// 3 - prompt
// const age = prompt("DIgite a sua idade:");

// console.log(`Você tem ${age} anos.`);

// 4 - alert
// alert("Testando");

// const z = 10;

// alert(`O numero é ${z}`);

// 5 - Math
// console.log(Math.max(5,2,1,10));
// console.log(Math.floor(5.14));
// console.log(Math.ceil(5.14));

// // 6 - console
// console.log("Teste!");
// console.error("error!");
// console.warn("aviso!");

// 7 - if
const m = 10;

if(m > 5){
    console.log("M é maior que 5!");
}

const user = "João";

if(user === "João"){
    console.log("Olá João");
}

// 8 - else
const loggedIn =  false;

if(loggedIn){
    console.log("Esta autenticado!");
} else {
    console.log("Não está autenticado");
}

// 9 - else if

if(1 > 2){
    console.log("Teste");
} else if (2 > 3){
    console.log("Teste 2");
} else if (5 > 1){
    console.log("Agora sim!");
}