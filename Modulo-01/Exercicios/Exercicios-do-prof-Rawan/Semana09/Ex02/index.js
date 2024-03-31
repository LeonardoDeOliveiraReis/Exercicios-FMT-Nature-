const express = require('express')

const app = express();

app.get("/sobre", (req, res) => {
    res.send("Essa é a página sobre!")
})

app.get("/contato", (req, res) => {
    res.send("Aqui está meu contato: Leonardo@email.com")
})

app.listen(3000, () => {
    console.log("Minha API está no ar!")
});