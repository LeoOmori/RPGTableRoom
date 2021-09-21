const express = require('express');
const routes = express.Router();
const authentication = require('../../middlewares/authorization');
const roomController = require('../controllers/roomController');

routes.get('/room/:roomId', roomController.show);
// needs authentication
routes.post('/room', authentication, roomController.store);
routes.get('/showOwnerRooms', authentication, roomController.showOwnerRooms);
routes.put('/room/:roomId', authentication, roomController.update);
routes.delete('/room/:roomId', authentication, roomController.delete);




module.exports = routes;