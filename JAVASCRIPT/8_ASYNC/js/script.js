// // 1 - setTimeout
// console.log("Ainda não executou");

// setTimeout(function() {
//     console.log("Requisição assíncrona");
// }, 2000);

// console.log("Ainda não executou 2");

// // 2 - setInterval
// console.log("Ainda não executou 2");

// // setInterval(function (){
// //     console.log("Intervalo assíncrono");
// // }, 3000);

// console.log("Ainda não começou 2");

// // 3 - Promise (executado apos todo o codigo assincrono)
// const promessa =  Promise.resolve(5 + 5);

// console.log("Algum código");

// promessa
//     .then((value) => {
//         console.log(`A soma é ${value}`);
//         return value;
//     })
//     .then((value) => value - 1)
//     .then((value) => console.log(`Agora é ${value}`));

//     console.log("Outro código");

// // 4 - falha na promise
// Promise.resolve(4 * "asd")
// .then((n) => {
//     if(Number.isNaN(n)){
//         throw new Error("Valores inválidos");
//     }
// })
// .catch((err) => console.log(`Um erro ocorreu: ${err}`));

// 5 - rejeição
function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if (n > 10) {
            resolve(`O número é maior que 10`);
        } else {
            reject(new Error("Número muito baixo"));
        }
    });
}

const a = checkNumber(20);

const b = checkNumber(10);

a.then((v) => console.log(`O resultado é ${v}`)).catch((err) =>
console.log(`Um erro ocorreu: ${err}`)
);

b.then((v) => console.log(`O resultado é ${v}`)).catch((err) =>
console.log(`Um erro ocorreu: ${err}`)
);

// 6 - resolvendo varias promises
const p1 =  new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(10);
    }, 3000);
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
    if (30 > 10) {
        resolve(30);
    } else {
        reject("Erro!");
    }
});

Promise.all([p1,p2,p3]).then((values) => console.log(values));