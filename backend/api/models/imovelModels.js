const conexao = require('../../config/conexao.js')

module.exports = {
    getAllimovel,
    getByIdimovel,
    aiimovel,
    updateimovel,
    deleteimovel
    
}

function getAllimovel (callback) {
    conexao.query('select * from imoveis', callback)
}

function getByIdimovel (id, callback) {
    conexao.query('select * from imoveis where imovel_codigo = ' + id, callback)
}

function aiimovel(id, ativo, callback) {
    console.log("imovel A/I.: " + ativo)

    p_sql = "update imoveis set aut_ativoinativo = '" + ativo + "' where imovel_codigo = '" + id + "'";

    conexao.query(p_sql, function (err, result) {
        conexao.query(p_sql, callback)

    })
    console.log("Retornando de A/I {MODELS}")
}

function updateimovel (id,dados, callback) { 
    p_sql = "update imovel set imovel_codigo = '" + dados.imovel_codigo +
        "', nome = '" + dados.nome +
        "', aut_ativoinativo = '" + dados.aut_ativoinativo +
        "', Andar = '" + dados.Andar +
        "', Metragem = '" + dados.Metragem +
        "', Qt_dormitorios = '" + dados.Qt_dormitorios +
        "', Cidade = '" + dados.Cidade +
        "', Bairro = '" + dados.Bairro +
        "', Valor = '" + dados.Valor +
            "' where imovel_codigo='" + id +"'";
            

     console.log("Atualizando imovel/Update \n" + p_sql)
    conexao.query(p_sql, callback)
} 

function deleteimovel(id, callback) {
    conexao.query('delete from imovel where imovel_codigo = ' + id, callback)
}