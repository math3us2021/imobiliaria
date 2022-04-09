const conexao = require('../../config/conexao.js')

module.exports = {
    getAllEditoras,
    getByIdEditoras
}

function getAllEditoras (callback) {
    conexao.query('select * from editoras', callback)
}

function getByIdEditoras (id, callback) {
    conexao.query('select * from editoras where edt_codigo = ' + id, callback)
}
