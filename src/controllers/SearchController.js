// const axios = require('axios')
const ExampleSchema = require('../models/ExampleSchema')

module.exports = {
    async index (req, res) {
        const { name } = req.query

        const response = ExampleSchema.find({
            // filters
        })

        return res.json(response)
    }
}