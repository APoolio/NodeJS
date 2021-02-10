var Pool = require('pg').Pool;
var pool = new Pool({
  user: 'andrew',
  host: 'localhost',
  database: 'StocksDB',
  password: 'db_pass',
  port: 5432,
});

var getStocks = function(request, response){
  
  var id = parseInt(request.params.id);

  pool.query('SELECT * FROM tick_list WHERE id = $1', [id], function(error, results){
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
    getStocks
};