const express = require('express')

const app = express();

app.get("/inicio", (req, res) => {
    res.send("Bem-Vindo a página inicial!")
})

app.listen(3000, () => {
    console.log("Minha API está no ar!")
})