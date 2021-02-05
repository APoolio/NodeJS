//Head honcho routes file

const routes = require('express').Router();
var stocks = require('./stocks');

routes.get('/', function(req, res){
  res.render('main');
});

routes.use('/stocks', stocks);

module.exports = routes;