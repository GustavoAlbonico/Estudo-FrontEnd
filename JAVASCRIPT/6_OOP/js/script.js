// // 1 - metodos
// const animal = {
//     nome: "Bob",
//     latir: function () {
//         console.log("Au au");
//     },
// };

// console.log(animal.nome);

// animal.latir();

// // 2 - aprofundamento em métodos
// const pessoa = {
//     nome: "Matheus",

//     getNome: function () {
//         return this.nome;
//     },

//     setNome: function (novoNome) {
//         this.nome = novoNome;
//     },
// };

// console.log(pessoa.nome);

// console.log(pessoa.getNome());

// pessoa.setNome("Joaquin");

// console.log(pessoa.getNome());

// // 3 - prototype
// const text = "asd";

// console.log(Object.getPrototypeOf(text));

// const bool = true;

// console.log(Object.getPrototypeOf(bool));

// const arr = [];

// console.log(arr.length);

// console.log(Object.getPrototypeOf(arr));

// // 4 - mais sobre prototype
// const myObject = {
//     a: "b",
// };

// console.log(Object.getPrototypeOf(myObject));

// console.log(Object.getPrototypeOf(myObject) === Object.prototype);

// const mySecondObject = Object.create(myObject);

// console.log(mySecondObject);

// console.log(mySecondObject.a);

// console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// // 5 - classes basicas
const cachorro = {
    raca: null,
    patas: 4,
};

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);

console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";

console.log(bulldog);

// 6 - função como classe - função construtora
function criarCachorro(nome, raca) {
    const cachorro = Object.create({});

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}

const bob = criarCachorro("Bob","Vira lata");

console.log(bob);

const jack = criarCachorro("Jack","Poodle");

console.log(jack);

console.log(Object.getPrototypeOf(jack));

// 7 - funcoes como classe
function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
}

const husky =  new Cachorro("Ozzy","Husky");

console.log(husky);