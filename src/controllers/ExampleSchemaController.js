// const axios = require('axios')
const ExampleSchema = require('../models/ExampleSchema')

module.exports = {
    async index(req, res) { 
        // Retorna uma lista do modelo ExampleSchema criada no Banco de Dados
        const response = await ExampleSchema.find()

        return res.json(response)
    },
    async store(req, res) {

        // Desestruturação
        const { name } = req.body

        // Método para Busca no Banco de Dados
        const ExampleExists = await ExampleSchema.findOne({ name });

        // Caso exista uma instância deste objeto no Banco de Dados
        if (ExampleExists) {
            // Retorna apenas a instância já criada
            return res.json(ExampleExists);
        }
        // Caso não exista
        else {
            // Cria uma nova instância
            const NewExampleSchema = await ExampleSchema.create({
                name
            })
            // Retorna nova instância criada
            return res.json(NewExampleSchema);
        }
    },
    async show(req, res) { },
    async update(req, res) { },
    async destroy(req, res) { }
}

// Boas práticas
// Dentro do controller não exceder:
// INDEX, SHOW, STORE, UPDATE, DESTROY