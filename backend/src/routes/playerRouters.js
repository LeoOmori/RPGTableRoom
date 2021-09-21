const express = require('express');
const routes = express.Router();
const authentication = require('../../middlewares/authorization');
const playerController = require('../controllers/playerController');


routes.post('/enterRoom/:roomId', authentication, playerController.enterRoom);
routes.delete('/exitRoom/:roomId', authentication, playerController.exitRoom);
routes.get('/showPlayerRooms', authentication, playerController.showPlayerRooms);



module.exports = routes;