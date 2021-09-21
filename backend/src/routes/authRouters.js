const express = require('express');
const routes = express.Router();
const authController = require('../controllers/authController');


routes.post('/login',authController.login);
routes.post('/refreshToken',authController.refreshToken);



module.exports = routes;