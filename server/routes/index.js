//Head honcho routes file

const routes = require('express').Router();
var stocks = require('./stocks');
var db = require('../DBconfig');

routes.get('/', function(req, res){
  db.getStocks(1);
  res.render('main');
});

routes.use('/stock', stocks);

module.exports = routes;