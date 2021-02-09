const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'andrew',
  host: 'localhost',
  database: 'api',
  password: 'db_pass',
  port: 5432,
});

const getStocks = function(request, response){
  
  pool.query('SELECT * FROM TickList WHERE id = $1', [id], function(error, results){
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getStocks
}