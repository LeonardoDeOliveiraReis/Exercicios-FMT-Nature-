const express = require('express')

const app = express();

app.get("/produto/:id/", (req, res) => {
    let id = req.params.id;
    res.send("Você escolheu o produto " + id + "!")
})

app.listen(3000, () => {
    console.log('Minha API está no ar!')
})