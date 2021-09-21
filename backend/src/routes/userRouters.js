const express = require('express');
const routes = express.Router();
const userController = require('../controllers/userController');
const authentication = require('../../middlewares/authorization');

routes.post('/user', authentication,userController.store);
routes.get('/user/:userId', userController.show);
// needs authentication
routes.put('/user', authentication ,userController.update);


module.exports = routes;