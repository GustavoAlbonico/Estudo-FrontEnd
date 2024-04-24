// 1 - instalação
console.log(axios);

// 2 - primeiro request
const getData = async() => {

    try {
        const  response = await postsFetch.get(
            "/users",
        //4 - definindo headers
            {
                headers: {
                    "Content-Type" : "aplication/json",
                    custom: "header",
                },
            }
        );
        
        console.log(response);

        return response.data;
    }catch (error) {
        console.log(error);
    }
}

getData();

// 3 - imprimindo dados na tela

const container =  document.querySelector("#user-container");

const printData = async () => {
    const data = await getData();

    console.log(data);

    data.forEach((user) => {
        const div = document.createElement("div");

        const nameElement =  document.createElement("h2");

        nameElement.textContent = user.name;

        div.appendChild(nameElement);

        const emailElement = document.createElement("p");

        emailElement.textContent = user.email;

        div.appendChild(emailElement);

        container.appendChild(div);
    });
};

printData();

// 5 - post
const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    postsFetch.post("/posts", {
        title: titleInput.value,
        body: bodyInput.value,
        userId: 1,

    });
});