//const mongoose = require('mongoose)
// Métodos => mongoose.Schema , mongoose.model

// Desestruturação no JavaScript
const { Schema, model } = require('mongoose');

const ExampleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    steam_user: {
        type: String,
        required: true
    },
    game_list:[String]
},{
    // createdAt, updatedAt
    timestamps: true
});

module.exports = model('Gamer', ExampleSchema)