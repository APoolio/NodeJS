const { profile } = require('console');
const { SummaryAPI } = require('./utils/summary');


//using express.js
var express = require('express');
var app = express();

//setting template engine to ejs
app.set('view engine', 'ejs');

//listening on port 3000
app.listen(3000);

app.get('/', function(req, res){
    res.render('index');
});

app.get('/aapl', function(req, res){
    req.url("https://yahoo-finance-low-latency.p.rapidapi.com/v11/finance/quoteSummary/AAPL");
    console.log(req.body);
});


/*
app.get('/contact', function(req, res){
    res.render('contact', {qs: req.query});
});

app.get('/profile/:name', function(req, res){
    var data = {age: 29, job: 'unemployed', hobbies: ['fitness', 'eating', 'gaming']};
    res.render('profile', {person: req.params.name, data: data});
});
*/

