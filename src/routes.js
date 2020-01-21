const express = require('express')

// Método do express para lidar com rotas
const routes = express.Router()

// Importação dos Controllers
const ExampleSchemaController = require('./controllers/ExampleSchemaController')
const SearchController = require('./controllers/SearchController')

// Descrição dos Verbos da API REST
    // GET
routes.get('/', (req, res) => { return res.json({ message: "Aplicação em funcionamento!"}) })
routes.get('/searchall', ExampleSchemaController.index)
routes.get('/search', SearchController.index)

    // POST
routes.post('/create', ExampleSchemaController.store)

    // PUT
routes.put('/edit/:id', ExampleSchemaController.update)

    // DELETE
routes.delete('/delete/:id', ExampleSchemaController.destroy)

module.exports = routes