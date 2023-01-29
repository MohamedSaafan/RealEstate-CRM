const { states } = require("./constants/statesFull");

const pool = require("../config/db");
const insertState = async (stateFips, stateLong, stateAbbr) => {
  try {
    const existingState = await pool.query(
      `select count(*) from state where state_fips=${stateFips}`
    );
    if (existingState.rows[0].count == 1) {
      console.log(existingState.rows, stateFips);
      console.log("state already exist!!");

      return;
    }
    const queryResult = await pool.query(
      "INSERT INTO state (state_short,state_long,state_fips) values ($1,$2,$3)",
      [stateAbbr, stateLong, stateFips]
    );
    console.log("inserted successfully");
  } catch (err) {
    console.log(err, "from error");
    console.log("error inserting into the DB");
  }
};

const insertStates = async () => {
  for (let i = 0; i < states.length; i++) {
    const { stateFips, stateLong, stateAbbr } = states[i];
    await insertState(stateFips, stateLong, stateAbbr);
  }
};

insertStates();
