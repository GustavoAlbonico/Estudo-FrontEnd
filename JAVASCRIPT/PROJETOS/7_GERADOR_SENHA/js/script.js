// Seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

const openCloseGeneratorButton = document.querySelector("#open-generate-password");
const generatedPasswordContainer = document.querySelector("#generate-options");
const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const copyPasswordButton = document.querySelector("#copy-password");

//Funções
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
}

const getSymbol = () => {
    const symbols = "(){}[]=<>/.,!@#$%¨&*_+=-?~ªº°|";

    return symbols[Math.floor(Math.random() * symbols.length)];
}

const generatePassoword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {

    let password = "";

    const passwordLength = +lengthInput.value;

    const generators = [];

    if (lettersInput.checked) {
        generators.push(getLetterLowerCase, getLetterUpperCase);
    }

    if (numbersInput.checked) {
        generators.push(getNumber);
    }

    if (symbolsInput.checked) {
        generators.push(getSymbol);
    }

    if (generators.length === 0) {
        return;
    }

    for (let i = 0; i < passwordLength; i++) {
        const randomValue = generators[Math.floor(Math.random() * generators.length)]();

        password += randomValue;
    }

    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;
};

// Eventos
generatePasswordButton.addEventListener("click", (e) => {
    e.preventDefault();
    generatePassoword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    );
});

openCloseGeneratorButton.addEventListener("click", () => {
    generatedPasswordContainer.classList.toggle("hide");
});

copyPasswordButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    const password =  generatedPasswordElement.querySelector("h4").innerText;

    navigator.clipboard.writeText(password).then(() => {

        copyPasswordButton.innerText = "Senha copiada!";

        setTimeout(() => {
            copyPasswordButton.innerText = "Copiar";
        },1000);
    })
})