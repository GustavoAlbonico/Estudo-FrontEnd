const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {

        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        });

    const button = e.target;

    const id = button.getAttribute("id");

    button.querySelector(".color").classList.add("selected");

    image.classList.add("changing");

    setTimeout(() => {
        image.setAttribute("src", `img/iphone_${id}.jpg`);
        image.classList.toggle("changing");
    },250)
    });
});