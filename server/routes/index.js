//Head honcho routes file

const routes = require('express').Router();
const models = require('./models');
var stocks = require('./stocks');

routes.get('/', function(req, res){
  res.render('main');
});

routes.use('/models', models);
routes.use('/stocks', stocks);

module.exports = routes;