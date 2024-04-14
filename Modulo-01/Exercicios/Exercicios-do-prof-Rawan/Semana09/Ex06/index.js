const express = require('express')
const app = express()
app.use(express.json())

let users = [];


app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
});


app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' })
    }
    res.json(user);
});

app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    Object.assign(user, req.body);
    res.json(user);
});

app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === req.params.id);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    users.splice(userIndex, 1);
    res.json({ message: 'Usuário excluído com sucesso' });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
