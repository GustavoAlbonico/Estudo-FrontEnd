const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img");

//Eventos
function generateQrCode(){

    const qrCodeInputValue = qrCodeInput.value;

    if(!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerando código...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener("load" , () => { //so vai mostrar o QR quando a imagem estiver ja carregada
        container.classList.add("active");
        qrCodeBtn.innerText = "Código criado!";
    })
}


qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter") {
        generateQrCode();
    }
})

qrCodeInput.addEventListener("keyup" , () => {
    
    if(!qrCodeInput.value){
        container.classList.remove("active");
        qrCodeBtn.innerHTML = "Gerar QR Code";
    }
})