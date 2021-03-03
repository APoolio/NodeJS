var Pool = require('pg').Pool;
var pool = new Pool({
  /* user: process.env.db_user,
  host: process.env.db_host,
  database: process.env.database,
  password: process.env.database,
  port: process.env.eb_port, */
  user: 'andrew',
  host: 'localhost',
  database: 'stocksDB',
  password: 'db_pass',
  port: 5432,
});

var getStocks = function(request, response)
{
  var id = request.params.id;
  
  pool.query('SELECT ticks FROM tick_list WHERE id = $1', [id], function(error, results){
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
    getStocks,
};