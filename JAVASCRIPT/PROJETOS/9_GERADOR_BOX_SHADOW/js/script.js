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
        shadowColor,
        shadowColorRef,
        opacity,
        opacityRef,
        inset,
        previewBox,
        firstRule,
        secondRule,
        thirdRule,
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
        this.shadowColor = shadowColor;
        this.shadowColorRef = shadowColorRef;
        this.opacity = opacity;
        this.opacityRef = opacityRef;
        this.inset = inset;
        this.insetRef = inset.checked;
        this.previewBox = previewBox;
        this.firstRule = firstRule;
        this.secondRule = secondRule;
        this.thirdRule = thirdRule;
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
        this.shadowColorRef.value = this.shadowColor.value;
        this.opacityRef.value = this.opacity.value;

        this.applyRuleBoxShadow();
        this.showRule();
        this.applyColor();
    }

    applyRuleBoxShadow() {
        const rgbValue = this.hexToRgb(this.shadowColorRef.value);

        const shadowRule = `${this.insetRef ? "inset" : "" } ${this.horizontalRef.value}px ${this.verticalRef.value}px ${this.blurRef.value}px ${this.spreadRef.value}px rgba(${rgbValue}, ${this.opacityRef.value})`;

        this.previewBox.style.boxShadow = shadowRule;
        this.currentRule = shadowRule;
    }

    // applyRuleFilterDropShadow(){
    //     const rgbValue = this.hexToRgb(this.shadowColorRef.value);

    //     const shadowRule = `drop-shadow(${this.horizontalRef.value}px ${this.verticalRef.value}px ${this.blurRef.value}px rgba(${rgbValue}, ${this.opacityRef.value}))`;

    //     this.previewBoxContainer.style.filter = shadowRule;
    //     this.currentRule = shadowRule;
    // }

    showRule(){
        this.firstRule.innerText = `box-shadow: ${this.currentRule};`;
        this.secondRule.innerText = `-webkit-box-shadow: ${this.currentRule};`;
        this.thirdRule.innerText = `-moz-box-shadow: ${this.currentRule};`;
    }

    // showRuleFilterDropShadow(){
    //     this.rule.innerText = this.currentRule;
    // }

    applyColor() {
        this.inputColorRef.value = this.inputColor.value;
        this.inputColorPreviewRef.value = this.inputColorPreview.value;
    }

    updateValue(type, value) {
        switch(type) {
            case "horizontal":
                this.horizontalRef.value = value;
            break;
        
            case "vertical":
                this.verticalRef.value = value;
            break;
        
            case "blur":
                this.blurRef.value = value;
            break;
        
            case "spread":
                this.spreadRef.value = value;
            break;
        
            case "input-color-shadow":
                this.shadowColorRef.value = value;
            break;

            case "opacity":
                this.opacityRef.value = value;
            break;

            case "inset":
                this.insetRef = value;
            break;
        }

        this.applyRuleBoxShadow();
        this.showRule();
    }

    clearValues(){
        this.insetRef = "";
        this.inset.checked = false;
        this.spreadRef.value = 0;
        this.spread.value = this.spreadRef.value
        

        this.applyRuleBoxShadow();
        this.showRule();
    }

    hexToRgb(hex){
        return `${("0x" + hex[1] + hex[2]) | 0}, ${("0x" + hex[3] + hex[4]) | 0}, ${("0x" + hex[5] + hex[6]) | 0}`;
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

const firstRule = document.querySelector("#rule-first span");
const secondRule = document.querySelector("#rule-second span");
const thirdRule = document.querySelector("#rule-third span");

const inputColor =  document.querySelector("#input-color");
const inputColorRef =  document.querySelector("#input-color-value");
const inputColorPreview =  document.querySelector("#input-color-preview");
const inputColorPreviewRef =  document.querySelector("#input-color-preview-value");

const shadowColor = document.querySelector('#input-color-shadow');
const shadowColorRef = document.querySelector('#input-color-shadow-value');
const opacity = document.querySelector("#opacity");
const opacityRef = document.querySelector("#opacity-value");
const inset = document.querySelector("#inset")

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
    shadowColor,
    shadowColorRef,
    opacity,
    opacityRef,
    inset,
    previewBox,
    firstRule,
    secondRule,
    thirdRule,
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
    const containerCheckbox = document.querySelector('#containerCheckbox');
    const containerSpread = document.querySelector('#containerSpread');

    
    previewBox.removeAttribute('class');
    previewBox.setAttribute('class',format);

    if(format !== 'default'){
        containerCheckbox.classList.add('hide');
        containerSpread.classList.add('hide');
        boxShadow.clearValues();
    }else {
        containerCheckbox.classList.remove('hide');
        containerSpread.classList.remove('hide');
    }
}

function applyColorSelectedPreview(color) {
    preview.style.backgroundColor = color;
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
});


const inputsName = [horizontal, vertical, blur, spread, shadowColor, opacity];

inputsName.forEach((inputName) => {
    inputName.addEventListener("input", (e) => {
        const value =  e.target.value;
        boxShadow.updateValue(inputName.name, value);
    });
});

inset.addEventListener("input", (e) => {
    const value = e.target.checked;
    boxShadow.updateValue("inset", value);
});

// Copiar regra
const rulesArea = document.querySelector("#rules-area");
const copyIntructions = document.querySelector("#copy-instructions");

rulesArea.addEventListener("click", () => {
    const rules = rulesArea.innerText.replace(/^\s*\n/gm, "");

    navigator.clipboard.writeText(rules).then(() => {
        copyIntructions.innerText = "Regra copiada com sucesso!";

        setTimeout(() => {
            copyIntructions.innerText = "Clique no quadro acima para copiar as regras"
        },1000);
    });
});


