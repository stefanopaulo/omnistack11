const express = require('express');

const routes = express.Router();

routes.post('/users', (req, res) => {
    return res.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Stefano Paulo'
    });
});

module.exports = routes;
