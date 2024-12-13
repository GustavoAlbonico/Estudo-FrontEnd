const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); //permite requisições no meu dominio
app.use(express.json()); //permite a comunicação de dados via JSON

//DB Connection
const conn = require("./db/conn");
conn();

// Routes
const routes = require("./routes/router");

app.use("/api", routes);

app.listen(3000, () => { //inicia aplicação
    console.log("Servidor online")
});

//npm init -y : faz com aplicação seja iniciado com npm node
//npm express framework do back
//npm mongoose como se fose nosso banco de dados
//npm cors para nao ter problemas de requisição
//npm i -D nodemon é tipo um liveserver para backend