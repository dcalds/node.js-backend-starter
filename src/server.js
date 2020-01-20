const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const server = express()

// Conexão com o banco de dados (Devemos configurar o user, password e nome do banco caso não exista)
mongoose.connect(" // String de conexão com o MongoDB " , {
    // Resolve o erro de deprecated
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Biblioteca que habilita comunicação entre o react e o node
server.use(cors())

// Tranforma as respostas em JSON
server.use(express.json())

// Rotas utilizads pelo express
server.use(routes)

server.listen(3333)