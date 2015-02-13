var environment = {};
var development = require('../environments/development');
var app = require('../../app');

environment.development = development;

switch (app.get('env')) {
  case 'development':
    environment.current = development;
    break;
  default:
    environment.current = development;
}

module.exports = environment;
