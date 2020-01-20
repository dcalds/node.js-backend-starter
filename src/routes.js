const express = require('express')

// Método do express para lidar com rotas
const routes = express.Router()

// Importação dos Controllers
const ExampleSchemaController = require('./controllers/ExampleSchemaController')
const SearchController = require('./controllers/SearchController')

// Descrição dos Verbos da API REST
    // GET
routes.get('/', (req, res) => { return response.json({ message: "Aplicação em funcionamento!"}) })
routes.get('/search', ExampleSchemaController.index)

    // POST
routes.post('/save', ExampleSchemaController.store)

    // PUT

    // DELETE

module.exports = routes