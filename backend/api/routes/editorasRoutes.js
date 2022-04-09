const controllers = require('../controllers/editorasController.js')

server.get('/editoras', controllers.editorasGetAll)

server.get('/editoras/:codigo', controllers.editorasGetById)