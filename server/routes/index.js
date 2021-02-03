const routes = require('express').Router();
const models = require('./models');
const stocks = require('./stocks');

routes.get('/', function(req, res){
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/models', models);
routes.use('/stocks', stocks);

module.exports = routes;