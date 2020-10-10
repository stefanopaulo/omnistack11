const express = require('express');

const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
    return res.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Stefano Paulo'
    });
})

app.listen(3333);
