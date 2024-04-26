const images = document.querySelectorAll(".image-container img");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return; // se a imagem não está sendo observada não precisa modificar

        const image = entry.target;

        image.src = image.src.replace("?w=10&","?w=1000&");

        observer.unobserve(image); //faz com que ele so mude uma vez e depois pare de observar
    })
},{})


images.forEach((image) => { //ativa a observação nas imagens
  observer.observe(image);
});


