// 1 - var, let e const

var a = 10;
var b = 15;

if (b > 10) {
    let a = 5;
    console.log(a);
}


function logName(){
    const name = "Pedro";
    console.log(name);
}

const nome = "Matheus";

logName();

console.log(nome);

// 2 - Arrow function
const sum = function (a, b) {
    return a + b;
};

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));

console.log(arrowSum(5, 5));

const greeting = (nome) => {
    if(nome) {
        return `Hello ${nome}`;
    } else {
        return "Hello";
    }
}