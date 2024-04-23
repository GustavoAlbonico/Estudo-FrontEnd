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
};

console.log(greeting("Matheus"));
console.log(greeting());

const user = {
    name: "Theo",
    //Em function o this é elemento pai
    sayUserName() {
        setTimeout(function () { 
            console.log(this);
            console.log(`Username: ${this.name}`);
        },1000);
    },
    //Em arrow function o this é elemento atual
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this);
            console.log(`Username: ${$this.name}`);
        },2000);
    }
}

user.sayUserName();
user.sayUserNameArrow();

//  3 - filter
const arr = [1,2,3,4,5,6];

const highNumbers = arr.filter((n) => {
    if (n >= 3){
        return n;
    }
});

console.log(highNumbers);

const users = [
    {name: "Matheus", available: true},
    {name: "João", available: false},
    {name: "Maria", available: true},
    {name: "Julia", available: false},
    {name: "Bianca", available: true},
];

const availableUsers = users.filter((user) => user.available);

console.log(availableUsers);

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

// 5 - template literals

const userName = "José";
const age = 190;

console.log(`O nome do usuário é ${userName} e ele tem ${age} anos.`);

// 6 - destructuring
const fruits = ["Maça", "Mamão","Laranja"];

const [f1, f2, f3] = fruits;

console.log(f1,f3);

const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periferico",
    color:"Cinza",
};

const {name: productName, price, category, color} =  productDetails;

console.log(`O nome do produto é ${productName}, ele custa R$${price} e é da cor ${color}.`);

// 7 - Spread operator
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1,...a2]; //Tranforma duas lista em uma só sem precisa usar for com push

console.log(a3);

const a4 = [0,...a3,7];// junta 0 e 7 com um array

console.log(a4);

const carName = {name: "Gol"};
const carBrand = {brand: "VW"};
const otherInfos = {km: 100000, price: 49.00};

const car = {...carName,...carBrand,...otherInfos};

// 8 - Classes
class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100);
    }
}

const shirt = new Product("Camisa Gola V", 20);

console.log(shirt);

console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(15));

// 9 - Herança
class productWithAttibutes extends Product {
    
    constructor(name, price, colors){
        super(name,price)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são: ");
        this.colors.forEach((color) => {
            console.log(color);
        });
    }
}

const hat =  new productWithAttibutes("Chapéu", 30,["Azul","Preto","Rosa"]);

console.log(hat);

console.log(hat.name);

hat.showColors();