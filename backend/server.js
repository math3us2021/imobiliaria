const http = require('http') // instanciou o protocolo http
const servidor = require('./config/aplicativo.js') // aqui vai o arquivo que vai criar o server
const conexao = require('./config/conexao.js')


http.createServer(servidor).listen(servidor.get('porta'), function(){ //aqui ele só vai ouvir a porta
    console.log('Servidor rodando na porta ' + server.get('url') + server.get ('porta')) //apenas um LOG de console
})
