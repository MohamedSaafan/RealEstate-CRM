const states = require("./constants/states-string");

// confirm them into an array of object

const statesStrArr = states.split("\n");
const statesObjARr = statesStrArr.map((stateStr) => {
  const stateFips = +stateStr.trim().substring(0, 2);
  const stateLong = stateStr.trim().substring(2).trim();
  return {
    stateFips,
    stateLong,
  };
});
console.log(statesObjARr, "from ");
