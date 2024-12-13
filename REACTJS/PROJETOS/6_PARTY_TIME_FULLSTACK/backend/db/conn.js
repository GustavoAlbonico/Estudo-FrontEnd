const mongoose = require("mongoose");

async function main() {
    try {
        await mongoose.connect(
            "mongodb+srv://gustavo:Sv023D3223ASpokh@cluster0.apx3e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );

        console.log("Banco de dados conectado");
    } catch (error) {
        console.log(`Erro ${error}`);
    }
}

module.exports = main;