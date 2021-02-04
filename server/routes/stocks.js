//Routing file for the stocks API methods

const bodyParser = require('body-parser');
const request = require('request');
var express = require('express');
var router = express.Router();

/*
module.exports = function(app){ 
  app.post('stocks', function(){
      res.send('Hello');
  });
};*/


router.get('/F', function(req, res){
  console.log('test');
});

router.get('/', function(req, res) {
  res.send('GET handler for /stocks route.');

  tick = req.query.stock;
  const options = {
    method: 'GET',
    url: 'https://yahoo-finance-low-latency.p.rapidapi.com/v8/finance/chart/' + req.query.stock,
    qs: {comparisons: 'MSFT,^VIX', events: 'div,split', stock: 'F'},
    headers: {
      'x-rapidapi-key': '9255378ff9msh5b72516af51d05dp160034jsn21cf53f6433c',
      'x-rapidapi-host': 'yahoo-finance-low-latency.p.rapidapi.com',
      useQueryString: true
    }
  };
  
  //request with callback function inbedded
  request(options, function (error, response, body) {
        if (error) throw new Error(error);
        response.setEncoding('utf-8');
        var data = JSON.parse(body);
        //var metadata = JSON.parse(data.chart.meta);
        console.log(data.chart.result[0].meta.symbol);
        console.log(data.chart.result[0].meta.regularMarketPrice);
  });

  
});

router.post('/', function(req, res) {
  console.log(req.body);
  res.send('POST handler for /stocks route.');
});

/*
module.exports = function(req, res){
    const options = {
        method: 'GET',
        url: 'https://yahoo-finance-low-latency.p.rapidapi.com/v8/finance/chart/AAPL',
        qs: {comparisons: 'MSFT,^VIX', events: 'div,split'},
        headers: {
          'x-rapidapi-key': '9255378ff9msh5b72516af51d05dp160034jsn21cf53f6433c',
          'x-rapidapi-host': 'yahoo-finance-low-latency.p.rapidapi.com',
          useQueryString: true
        }
      };
      
      request(options, function (error, response, body) {
            if (error) throw new Error(error);
            response.setEncoding('utf-8');
            var data = JSON.parse(body);
            //var metadata = JSON.parse(data.chart.meta);
            console.log(data.chart.result[0].meta.symbol);
            console.log(data.chart.result[0].meta.regularMarketPrice);
      });
    //res.status(200).json({ message: "TEST2" });
  };
  */

module.exports = router;

 