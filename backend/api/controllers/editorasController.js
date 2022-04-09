const models = require('../models/editorasModels.js')
module.exports = {
    editorasGetAll,
    editorasGetById 
}

function editorasGetAll (req, res) {
  console.log("Rota Livros Listar")
  models.getAllEditoras(function(err, resposta){
      console.log('Retorno de editoras {M O D E L S}', resposta)
      if(err){
          throw err
         }else {
             res.json(resposta)

      }
  })
  
    
}

function editorasGetById (req, res) {
    const id = req.params.codigo;
    console.log('Parametros recebidos: '+id)
    models.getByIdEditoras(id, function(err, resposta){
        console.log('Retorno de editoras {M O D E L S}', resposta)
        if(err){
            throw err
           }else {
               res.json(resposta)
  
        }
    })
    
      
  }