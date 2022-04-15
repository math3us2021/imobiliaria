const models = require('../models/casaModels.js')
module.exports = {
    casaGetAll,
    casaGetById,
    casaAi,
    casaUpdate,
    casaDelete

}

function casaGetAll (req, res) {
  console.log("Rota Imobiliaria Listar")
  models.getAllcasa(function(err, resposta){
      console.log('Retorno de casa {M O D E L S}', resposta)
      if(err){
          throw err
         }else {
             res.json(resposta)

      }
  })
  
    
}

function casaGetById (req, res) {
    const id = req.params.codigo;
    console.log('Parametros recebidos: '+id)
    models.getByIdcasa(id, function(err, resposta){
        console.log('Retorno de casa {M O D E L S}', resposta)
        if(err){
            throw err
           }else {
               res.json(resposta)
  
        }
    })
    
      
  }

  function casaAi (req, res) {
    const id = req.params.codigo;
    let p_ativo = ""
    console.log('Ativar/Inativar casa { MODEL } ' + id)
    models.getByIdcasa(id, function(err, resposta){
        console.log('Retorno de casa { M O D E L S } ', resposta[0].Casa_codigo)
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

            models.aicasa(id, p_ativo, function(err, result){
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
function casaUpdate (req, res) {
    const id = req.params.codigo
    const dados = req.body

    console.log('Atualização de casa { MODEL} '+id)
    console.log(dados)

    models.updatecasa(id, dados, function(err, resposta){
        console.log('Retorno Atualização de casa {M O D E L }', resposta)
        if(err){
            throw err
           }else {
               res.json(resposta)
        }
    })   
  }

  function casaDelete (req, res) {
    const id = req.params.codigo
    console.log('Deletar casa { MODEL } '+id)
    models.deletecasa(id, function(err, resposta){
        console.log('Retorno Delete casa { M O D E L } ', resposta)
        if(err){
            throw err
           }else {
               res.json(resposta)
        }
    })   
  }