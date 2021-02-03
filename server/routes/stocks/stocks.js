const request = require('request');

module.exports = function(req, res){
    const options = {
        method: 'GET',
        url: 'https://yahoo-finance-low-latency.p.rapidapi.com/v8/finance/chart/AAPL',
        qs: {comparisons: 'MSFT,^VIX', events: 'div,split'},
        headers: {
          'x-rapidapi-key': '',
          'x-rapidapi-host': '',
          useQueryString: true
        }
      };
      
      request(options, function (error, response, body) {
          if (error) throw new Error(error);
      
          console.log(response);
      }).pipe(body);
    //res.status(200).json({ message: "TEST2" });
  };