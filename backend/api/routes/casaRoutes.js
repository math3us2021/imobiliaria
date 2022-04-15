const controllers = require('../controllers/casaController.js')

server.get('/casa', controllers.casaGetAll)

server.get('/casa/:codigo', controllers.casaGetById)

server.get('/casa/ai/:codigo', controllers.casaAi)

server.put('/casa/:codigo', controllers.casaUpdate)

server.delete('/casa/:codigo', controllers.casaDelete)