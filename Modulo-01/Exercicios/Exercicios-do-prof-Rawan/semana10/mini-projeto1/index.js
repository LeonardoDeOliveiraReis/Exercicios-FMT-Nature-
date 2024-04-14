const express = require('express')
const app = express()
app.use(express.json())


let produtos = []
const id = 1

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()} ${req.method} to ${req.url}]`)
    next()
})

app.post('/produto', (req, res) => {
    const {nome, preco, descricao} = req.body

    if (typeof nome != 'string'|| typeof preco != 'number' || typeof descricao != 'string')
    return res.status(400).json({ Error: 'Dados do produto inválidos'})

    const produto =  {nome, preco, descricao}
    produtos.push(produto)
        res.status(201).json(produto)
            id++

})

app.get('/produtos', (req, res) => {
    return res.status(200).json(produtos)
})

app.put('/produto/:id', (req, res ) => {
   const { id } = req.params
   const{ nome, preco, descricao } = req.body

   const produtoIndex = produtos.findIndex(p => p.id === parseInt(id))

   if (produtoIndex === -1) {
    res.status(404).json({ Error : 'Produto não encontrado'})
   }

   const produto = {id: parseInt(id), nome, preco, descricao}
   produtos[produtoIndex] = produto

   res.status(201).json(produto)
})

app.delete('/produto/:id', (req, res) => {
    const { id } = req.params

    const produtoIndex = produtos.findIndex(p => p.id === parseInt(id))

    if (produtoIndex === -1) {
        return res.status(404).json({ Error: 'Produto não encontrado'})
    }

    produtos.splice(produtoIndex, 1)
    res.status(200).json({ Message: 'Produto excluido com sucesso!'}) 
})




app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!')
})