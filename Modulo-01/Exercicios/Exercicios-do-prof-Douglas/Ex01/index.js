const express = require('express');
const app = express();
app.use(express.json());


let cursos = [];

app.post('/cursos', (req, res) => {
    const { nome, duracao } = req.body;

    
    if (!nome || !duracao) {
        return res.status(400).json({ error: 'Dados inválidos. Por favor, forneça o nome do curso e sua duração.' });
    }

   
    const curso = { id: cursos.length + 1, nome, duracao };
    cursos.push(curso);

    return res.status(201).json(curso);
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
