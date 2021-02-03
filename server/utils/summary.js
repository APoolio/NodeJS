var unirest = require("unirest");

var req = unirest("GET", "https://yahoo-finance-low-latency.p.rapidapi.com/v11/finance/quoteSummary/AAPL");

req.query({
	"modules": "defaultKeyStatistics,assetProfile"
});

req.headers({
	"x-rapidapi-key": "9255378ff9msh5b72516af51d05dp160034jsn21cf53f6433c",
	"x-rapidapi-host": "yahoo-finance-low-latency.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});