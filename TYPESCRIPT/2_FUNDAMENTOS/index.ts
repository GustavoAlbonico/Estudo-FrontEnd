//1 - numbers
let x: number = 10;

console.log(x);

x = 16;

console.log( typeof x);

const y:number = 15.56464;

console.log(typeof y);

console.log(y);

console.log(y.toPrecision(3));

//2- string
const firstName: string = "Gustavo";

console.log(firstName.toUpperCase());

let fullName: string;

const lastName: string = "Albônico";

fullName = firstName + " " + lastName;

console.log(fullName);

console.log(typeof fullName);

//3- boolean
let a: boolean = true;

console.log(typeof a)

a = false;

// 4 - inference e annotation
const ann: string = 'Teste';

const inf = 'Testando';

// 5 - compile automatico
let q = 10;

console.log(q);

q = 11;

console.log(q);
