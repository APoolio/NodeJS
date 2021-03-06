//Routing file for the stocks API methods
var bodyParser = require('body-parser');
var request = require('request');
var express = require('express');
var router = express.Router();

//http://127.0.0.1:3000/stock/{tick}
router.get('/:tick', function(req, res) {

  var options = {
    method: 'GET',
    url: 'https://yahoo-finance-low-latency.p.rapidapi.com/v8/finance/chart/' + req.params.tick,
    qs: {range: '1d'},
    headers: {
      'x-rapidapi-key': process.env.key,
      'x-rapidapi-host': process.env.host,
      useQueryString: true
    }
  };
  
  //request with callback function inbedded
  request(options, function (error, response, body) {
        if (error) throw new Error(error);
        response.setEncoding('utf-8');
        var data = JSON.parse(body);
        res.send(data);
        //var metadata = JSON.parse(data.chart.meta);
        //console.log(data.chart.result[0].meta.symbol);
        //console.log(data.chart.result[0].meta.regularMarketPrice);
  });

  
});

router.post('/', function(req, res) {
  console.log(req.query);
  res.send('POST handler for /stocks route.');
});

module.exports = router;

 