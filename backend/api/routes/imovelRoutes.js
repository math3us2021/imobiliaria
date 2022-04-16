const controllers = require('../controllers/imovelController.js')

server.get('/imoveis', controllers.imovelGetAll)

server.get('/imoveis/:codigo', controllers.imovelGetById)

server.get('/imoveis/ai/:codigo', controllers.imovelAi)

server.post('/imoveis/:codigo', controllers.imovelPost)

server.put('/imoveis/:codigo', controllers.imovelUpdate)

server.delete('/imoveis/:codigo', controllers.imovelDelete)