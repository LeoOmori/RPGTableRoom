const express = require('express');
const routes = express.Router();
const authentication = require('../../middlewares/authorization');
const characterController = require('../controllers/characterController');


routes.get('/character/:characterId', characterController.show);
// needs authentication
routes.get('/allRoomCharacters/:roomId', authentication ,characterController.allRoomCharacters);
routes.post('/character', authentication ,characterController.store);
routes.put('/character/:characterId', authentication ,characterController.update);
routes.delete('/character/:characterId', authentication ,characterController.delete);



module.exports = routes;