const pool = require("./config/db");

const excuteQuery = async () => {
  const query = await pool.query(
    "select * from state where state_short = 'AK'"
  );
  console.log(query.rows, "from query");
};

excuteQuery();
