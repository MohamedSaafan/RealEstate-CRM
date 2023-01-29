const Pool = require("pg").Pool;
const { DBConnectionURL } = require("../.env/DB_connections");

const pool = new Pool({
  connectionString: DBConnectionURL,
  max: 1,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
