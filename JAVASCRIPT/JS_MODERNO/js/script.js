// // 1 - var, let e const

// var a = 10;
// var b = 15;

// if (b > 10) {
//     let a = 5;
//     console.log(a);
// }


// function logName(){
//     const name = "Pedro";
//     console.log(name);
// }

// const nome = "Matheus";

// logName();

// console.log(nome);

// // 2 - Arrow function
// const sum = function (a, b) {
//     return a + b;
// };

// const arrowSum = (a, b) => a + b;

// console.log(sum(5, 5));

// console.log(arrowSum(5, 5));

// const greeting = (nome) => {
//     if(nome) {
//         return `Hello ${nome}`;
//     } else {
//         return "Hello";
//     }
// };

// console.log(greeting("Matheus"));
// console.log(greeting());

// const user = {
//     name: "Theo",
//     //Em function o this é elemento pai
//     sayUserName() {
//         setTimeout(function () { 
//             console.log(this);
//             console.log(`Username: ${this.name}`);
//         },1000);
//     },
//     //Em arrow function o this é elemento atual
//     sayUserNameArrow() {
//         setTimeout(() => {
//             console.log(this);
//             console.log(`Username: ${$this.name}`);
//         },2000);
//     }
// }

// user.sayUserName();
// user.sayUserNameArrow();

// //  3 - filter
// const arr = [1,2,3,4,5,6];

// const highNumbers = arr.filter((n) => {
//     if (n >= 3){
//         return n;
//     }
// });

// console.log(highNumbers);

// const users = [
//     {name: "Matheus", available: true},
//     {name: "João", available: false},
//     {name: "Maria", available: true},
//     {name: "Julia", available: false},
//     {name: "Bianca", available: true},
// ];

// const availableUsers = users.filter((user) => user.available);

// console.log(availableUsers);

// 4 - map
const products = [
    {name: "Camisa", price: 10.99, category: "Roupas"},
    {name: "Chaleira Elétrica", price: 150, category: "Eletro"},
    {name: "Fogão", price: 499, category: "Eletro"},
    {name: "Calça Jeans", price: 87.99, category: "Roupas"},
];

products.map((product) => {
    if(product.category === "Roupas"){
        product.onSale = true;
    }
});

console.log(products);