const express = require('express') 
const consign = require('consign') // importando uma biblioteca
// const path = require('path')
const body = require('body-parser')
const cors = require('cors') // ele que altoriza a ligação entre o front com o back

server = express();   

server.set('url', 'http://localhost:') // variavel do express
server.set('porta', 3001)

//app.use(express.json())
server.use(body.json())


consign({cwd: 'api'}) // na pasta api, vai trazer esses tr6es diretórios (comando cwd)
    .include('models')
    .then('controllers')
    .then('routes')
    .into(server)
;

module.exports = server