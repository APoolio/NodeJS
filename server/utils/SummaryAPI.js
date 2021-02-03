const request = require('request');
var express = require('express');
var router = express.Router();

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

	console.log(response);
}).pipe();
