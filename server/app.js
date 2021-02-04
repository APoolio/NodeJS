const { profile } = require('console');
const routes = require('./routes');
//var bodyParser = require('./body-parser');

//using express.js
var express = require('express');
var app = express();


//setting template engine to ejs
app.set('view engine', 'ejs');

//listening on port 3000
app.listen(3000, function(){
    console.log('App listeing on port 3000');
});

//connecting all routes
app.use('/', routes);

app.use(express.static(__dirname + '/views'));



