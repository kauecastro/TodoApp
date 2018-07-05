

const express = require('express');

module.exports = function(server) {
    //Usar a rota API
    const route = express.Router()
    server.use('/api', route)

    //Criando a rota para o todo
    const resource = require('../api/todo/todoService')
    resource.register(route, '/todo')
}