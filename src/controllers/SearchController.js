// const axios = require('axios')
const ExampleSchema = require('../models/ExampleSchema')

module.exports = {
    async index (req, res) {
        const { steam_user } = req.query

        const response = await ExampleSchema.find({ steam_user })
        
        return res.json(response)
    }
}