const conexao = require('../../config/conexao.js')

module.exports = {
    getAllimovel,
    getByIdimovel,
    aiimovel,
    updateimovel,
    deleteimovel,
    postImovel
    
}

function getAllimovel (callback) {
    conexao.query('select * from imoveis', callback)
}

function getByIdimovel (id, callback) {
    conexao.query('select * from imoveis where imoveis_codigo = ' + id, callback)
}

function aiimovel(id, ativo, callback) {
    console.log("imovel A/I.: " + ativo)

    p_sql = "update imoveis set aut_ativoinativo = '" + ativo + "' where imoveis_codigo = '" + id + "'";

    conexao.query(p_sql, function (err, result) {
        conexao.query(p_sql, callback)

    })
    console.log("Retornando de A/I {MODELS}")
}

function updateimovel (id,dados, callback) { 
    p_sql = "update imoveis set nome = '" + dados.nome +
        "', aut_ativoinativo = '" + dados.aut_ativoinativo +
        "', Andar = '" + dados.Andar +
        "', Metragem = '" + dados.Metragem +
        "', Qt_dormitorios = '" + dados.Qt_dormitorios +
        "', Cidade = '" + dados.Cidade +
        "', Bairro = '" + dados.Bairro +
        "', Valor = '" + dados.Valor +
            "' where imoveis_codigo='" + id +"'"; 
            

     console.log("Atualizando imoveis/Update \n" + p_sql)
    conexao.query(p_sql, callback)
} 

function deleteimovel(id, callback) {
    conexao.query('delete from imoveis where imoveis_codigo = ' + id, callback)
}

function postImovel (dados, callback) { 
    const p_sql = `insert into imoveis (nome, aut_ativoinativo, Andar, Metragem,Qt_dormitorios, Cidade,Bairro,Valor ) values ('${ dados.nome}', '${dados.aut_ativoinativo}' , '${dados.Andar}' , '${dados.Metragem}' ,
     '${dados.Qt_dormitorios}' , '${dados.Cidade}' , '${dados.Bairro}' , '${dados.Valor}' )`;

    console.log("Inserindo imoveis/Post \n" + p_sql)
    conexao.query(p_sql, callback)
} 