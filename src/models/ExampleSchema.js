//const mongoose = require('mongoose)
// Métodos => mongoose.Schema , mongoose.model

// Desestruturação no JavaScript
const { Schema, model } = require('mongoose');

const ExampleSchema = new Schema({
    name: {
        type: String,
        required: true
    }
},{
    // createdAt, updatedAt
    timestamps: true
});

module.exports = model('Dev', ExampleSchema);