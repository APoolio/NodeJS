//Head honcho routes file

const routes = require('express').Router();
var stocks = require('./stocks/stocks');
var db = require('../configs/DBconfig');

require('dotenv').config();

//http://127.0.0.1:3000/
routes.get('/', function(req, res){
  //db.getStocks();
  res.render('main');
});

//http://127.0.0.1:3000/user/stocks/{id}
routes.get('/user/stocks/:id', db.getStocks);

//http://127.0.0.1:3000/stock
routes.use('/stock', stocks);

module.exports = routes;