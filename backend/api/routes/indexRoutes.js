const controllers = require('../controllers/indexController.js')

server.get('/', controllers.index)
