const { profile } = require('console');
const bodyParser = require('body-parser');
const routes = require('./routes');


//using express.js
var express = require('express');
var app = express();


//setting template engine to ejs
app.set('view engine', 'ejs');

//listening on port 3000
app.listen(3000, function(){
    console.log('App listeing on port 3000');
});

app.use(bodyParser.urlencoded({ extended: true }));

//connecting all routes
app.use('/', routes);

app.use(express.static(__dirname + '/views'));



