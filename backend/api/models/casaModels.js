const conexao = require('../../config/conexao.js')

module.exports = {
    getAllcasa,
    getByIdcasa,
    aicasa,
    updatecasa,
    deletecasa
    
}

function getAllcasa (callback) {
    conexao.query('select * from Casa', callback)
}

function getByIdcasa (id, callback) {
    conexao.query('select * from casa where Casa_codigo = ' + id, callback)
}

function aicasa(id, ativo, callback) {
    console.log("casa A/I.: " + ativo)

    p_sql = "update casa set aut_ativoinativo = '" + ativo + "' where aut_codigo = '" + id + "'";

    conexao.query(p_sql, function (err, result) {
        conexao.query(p_sql, callback)

    })
    console.log("Retornando de A/I {MODELS}")
}

function updatecasa (id,dados, callback) { 
    p_sql = "update casa set aut_nome = '" + dados.aut_nome +
        "', aut_ativoinativo = '" + dados.aut_ativoinativo +
        "', aut_apelido = '" + dados.aut_apelido +
        "', aut_sexo = '" + dados.aut_sexo +
        "', aut_telefone = '" + dados.aut_telefone +
        "', aut_email = '" + dados.aut_email +
            "' where aut_codigo='" + id +"'";
            

     console.log("Atualizando casa/Update \n" + p_sql)
    conexao.query(p_sql, callback)
} 

function deletecasa(id, callback) {
    conexao.query('delete from casa where aut_codigo = ' + id, callback)
}