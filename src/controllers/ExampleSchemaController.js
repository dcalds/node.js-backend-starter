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
        const { name, email, steam_user, game_list } = req.body

        // Método para Busca no Banco de Dados
        const ExampleExists = await ExampleSchema.findOne({ steam_user });

        // Caso exista uma instância deste objeto no Banco de Dados
        if (ExampleExists) {
            // Retorna apenas a instância já criada
            return res.json(ExampleExists);
        }
        // Caso não exista
        else {
            // Cria uma nova instância
            const NewExampleSchema = await ExampleSchema.create({
                name,
                email,
                steam_user,
                game_list
            })
            // Retorna nova instância criada
            return res.json(NewExampleSchema);
        }
    },
    async update(req, res) {
        
        let user = await ExampleSchema.findById(req.params.id)

        user.name = req.body.new_name

        await user.save()

        return res.json({ message: `Usuário ${user.name} editado.` })
    },
    async destroy(req, res) {

        let user = await ExampleSchema.findById(req.params.id)

        const username = user.name

        await user.remove()

        return res.json({ message: `Usuário ${username} removido.` })
    }
}

// Boas práticas
// Dentro do controller não exceder:
// INDEX, SHOW, STORE, UPDATE, DESTROY