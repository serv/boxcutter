var express = require('express');
var routes = express.Router();

var applicationController = require('../app/controllers/application_controller');

routes.get('/*', applicationController.index);

module.exports = routes;
