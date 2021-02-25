var Pool = require('pg').Pool;
var pool = new Pool({
  user: process.env.db_user,
  host: process.env.db_host,
  database: process.env.database,
  password: process.env.database,
  port: process.env.eb_port,
  
});

var getStocks = function(request, response)
{

  console.log('in get stocks');
  var id = parseInt(request.params.id);

  pool.query('SELECT * FROM tick_list WHERE id = $1', [id], function(error, results){
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
    response.send('test');
  });
};

module.exports = {
    getStocks,
};