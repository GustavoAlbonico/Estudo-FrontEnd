class BoxShadowGenerator {

    constructor(
        horizontal,
        horizontalRef,
        vertical,
        verticalRef,
        blur,
        blurRef,
        spread,
        spreadRef,
        previewBox,
        rule,
        webkitRule,
        mozRule,
        inputColor,
        inputColorRef,
        inputColorPreview,
        inputColorPreviewRef
    ) {
        this.horizontal = horizontal;
        this.horizontalRef = horizontalRef;
        this.vertical = vertical;
        this.verticalRef = verticalRef;
        this.blur = blur;
        this.blurRef = blurRef;
        this.spread = spread;
        this.spreadRef = spreadRef;
        this.previewBox = previewBox;
        this.rule = rule;
        this.webkitRule = webkitRule;
        this.mozRule = mozRule;
        this.inputColor = inputColor;
        this.inputColorRef = inputColorRef;
        this.inputColorPreview = inputColorPreview;
        this.inputColorPreviewRef = inputColorPreviewRef;
    }

    initialize() {
        this.horizontalRef.value = this.horizontal.value;
        this.verticalRef.value = this.vertical.value;
        this.blurRef.value = this.blur.value;
        this.spreadRef.value = this.spread.value;

        this.applyRule();
        this.showRule();
        this.applyColor();
    }

    applyRule() {
        this.previewBox.style.boxShadow = `${this.horizontalRef.value}px ${this.verticalRef.value}px ${this.blurRef.value}px ${this.spreadRef.value}px #000000`
        this.currentRule = this.previewBox.style.boxShadow;
    }

    showRule(){
        this.rule.innerText = this.currentRule;
        this.webkitRule.innerText = this.currentRule;
        this.mozRule.innerText = this.currentRule;
    }

    applyColor() {
        this.inputColorRef.value = this.inputColor.value;
        this.inputColorPreviewRef.value = this.inputColorPreview.value;
    }

    updateValue(type, value) {
        switch(type) {
            case "horizontal":
                this.horizontalRef.value = value;
        }
        switch(type) {
            case "vertical":
                this.verticalRef.value = value;
        }
        switch(type) {
            case "blur":
                this.blurRef.value = value;
        }
        switch(type) {
            case "spread":
                this.spreadRef.value = value;
        }

        this.applyRule();
        this.showRule();
    }
}

// Seleção de elementos

const horizontal = document.querySelector("#horizontal");
const horizontalRef = document.querySelector("#horizontal-value");
const vertical = document.querySelector("#vertical");
const verticalRef = document.querySelector("#vertical-value");
const blur = document.querySelector("#blur");
const blurRef = document.querySelector("#blur-value");
const spread = document.querySelector("#spread");
const spreadRef = document.querySelector("#spread-value");

const previewBox = document.querySelector("#box");

const preview = document.querySelector("#preview");

const rule = document.querySelector("#rule span");
const webkitRule = document.querySelector("#webkit-rule span");
const mozRule = document.querySelector("#moz-rule span");

const inputColor =  document.querySelector("#input-color");
const inputColorRef =  document.querySelector("#input-color-value");
const inputColorPreview =  document.querySelector("#input-color-preview");
const inputColorPreviewRef =  document.querySelector("#input-color-preview-value");

const listViewOptionsElements = document.querySelectorAll("#list-view-options li span");
const listViewOptions = document.querySelector("#list-view-options");

const boxShadow = new BoxShadowGenerator(
    horizontal,
    horizontalRef,
    vertical,
    verticalRef,
    blur,
    blurRef,
    spread,
    spreadRef,
    previewBox,
    rule,
    webkitRule,
    mozRule,
    inputColor,
    inputColorRef,
    inputColorPreview,
    inputColorPreviewRef
);

boxShadow.initialize();

function applyColorSelectedFormat(color) {
    previewBox.style.backgroundColor = color;
    listViewOptionsElements.forEach((e) => e.style.backgroundColor = color);
}

function applyFormatSelected(format){
    previewBox.removeAttribute('class');
    previewBox.setAttribute('class',format);
}

function applyColorSelectedPreview(color) {
    preview.style.backgroundColor = color;
}

function changeColor(color){
    
    const red = parseInt(color.slice(1,3)) || 1;
    const green = parseInt(color.slice(3,5)) || 1;
    const blue = parseInt(color.slice(5,7)) || 1;

    // console.log(red,green,blue);

    const luminosidade =  ( red * 299 + green * 587 + blue * 114) / 1000;

    console.log(luminosidade);
}

// Eventos


// format color
inputColor.addEventListener("input", (e) => {
    inputColorRef.value = e.target.value;
    applyColorSelectedFormat(e.target.value);
});

inputColorRef.addEventListener("change", (e) => {
    if(e.target.value.length === 7){
        inputColor.value = e.target.value;
        applyColorSelectedFormat(e.target.value);
    }
});

listViewOptions.addEventListener("click" , (e) => {
    if(e.target.tagName === "LI"){
        applyFormatSelected(e.target.children[0].className);
    }
});

//Preview color
inputColorPreviewRef.addEventListener("change", (e) => {
    if(e.target.value.length === 7){
        inputColorPreview.value = e.target.value;
        applyColorSelectedPreview(e.target.value);
    }
});

inputColorPreview.addEventListener("input", (e) => {
    inputColorPreviewRef.value = e.target.value;
    applyColorSelectedPreview(e.target.value);
    changeColor(e.target.value);
});


const inputsName = [horizontal,vertical,blur,spread];

inputsName.forEach((inputName) => {
    inputName.addEventListener("input", (e) => {
        const value =  e.target.value;
        boxShadow.updateValue(inputName.name, value);
    });
});




