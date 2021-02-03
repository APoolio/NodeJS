const models = require('express').Router();
const stocks = require('./stocks');

models.get('/', stocks);

module.exports = models;