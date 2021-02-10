//Head honcho routes file

const routes = require('express').Router();
var stocks = require('./stocks');
var db = require('../DBconfig');

//http://127.0.0.1:3000/
routes.get('/', function(req, res){
  //db.getStocks();
  res.render('main');
});

//http://127.0.0.1:3000/{id}
routes.get('/:id', db.getStocks);

//http://127.0.0.1:3000/stock
routes.use('/stock', stocks);

module.exports = routes;