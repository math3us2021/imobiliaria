const models = require('../models/imovelModels.js')
module.exports = {
    imovelGetAll,
    imovelGetById,
    imovelAi,
    imovelUpdate,
    imovelDelete,
    imovelPost

}

function imovelGetAll (req, res) {
  console.log("Rota Imovel Listar")
  models.getAllimovel(function(err, resposta){
      console.log('Retorno de imovel {M O D E L S}', resposta)
      if(err){
          throw err
         }else {
             res.json(resposta)

      }
  })
  
    
}

function imovelGetById (req, res) {
    const id = req.params.codigo;
    console.log('Parametros recebidos: '+id)
    models.getByIdimovel(id, function(err, resposta){
        console.log('Retorno de imovel {M O D E L S}', resposta)
        if(err){
            throw err
           }else {
               res.json(resposta)
  
        }
    })
    
      
  }

  function imovelAi (req, res) {
    const id = req.params.codigo;
    let p_ativo = ""
    console.log('Ativar/Inativar imovel { MODEL } ' + id)
    models.getByIdimovel(id, function(err, resposta){
        console.log('Retorno de imovel { M O D E L S } ', resposta[0].imoveis_codigo)
        console.log('Registro A/I: '+resposta[0].aut_ativoinativo)
        p_ativo = resposta[0].aut_ativoinativo 
        if(err){
            throw err
        } else{
            if(p_ativo == 'A'){
                p_ativo = 'I'
            }else{
                p_ativo = 'A'
            }
            console.log('Registro A/I: '+p_ativo)

            models.aiimovel(id, p_ativo, function(err, result){
                if(err){
                    throw err
                }else{
                    console.log('Processo A/I realizado com sucesso!')
                }
            })
            res.json(resposta)
        }
    })
}
function imovelUpdate (req, res) {
    const id = req.params.codigo
    const dados = req.body

    console.log('Atualização de imovel { MODEL} '+id)
    console.log(dados)

    models.updateimovel(id, dados, function(err, resposta){
        console.log('Retorno Atualização de imovel {M O D E L }', resposta)
        if(err){
            throw err
           }else {
               res.json(resposta)
        }
    })   
  }

  function imovelDelete (req, res) {
    const id = req.params.codigo
    console.log('Deletar imovel { MODEL } '+id)
    models.deleteimovel(id, function(err, resposta){
        console.log('Retorno Delete imovel { M O D E L } ', resposta)
        if(err){
            throw err
           }else {
               res.json(resposta)
        }
    })   
  }

  function imovelPost (req, res) {
    const dados = req.body
    console.log(dados)

    models.postImovel(dados, function(err, resposta){
        console.log('Retorno Atualização de imovel {M O D E L }', resposta)
        if(err){
            throw err
           }else {
               res.json(resposta)
        }
    })   
  }
