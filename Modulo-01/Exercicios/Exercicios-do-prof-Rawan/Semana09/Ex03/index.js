const express = require("express")

const app = express();

app.use((req, res, next) => {
    let now = new Date().toString();
    let log = `${now}: ${req.method} ${req.url}`;

    console.log(log)
    next()
});

app.get('/', (req, res) => {
    res.send('Olá, Mundo!')
});

app.listen(3000, () => {
    console.log('Minha API está no ar!')
})