const { states } = require("./constants/states-string");
const { statesAbbreviations } = require("./constants/states_abbreviations");
// confirm them into an array of object
const abbreviationsKeys = Object.keys(statesAbbreviations);
const statesStrArr = states.split("\n");
const statesObjARr = statesStrArr.map((stateStr) => {
  const stateFips = +stateStr.trim().substring(0, 2);
  const stateLong = stateStr.trim().substring(2).trim();
  let stateAbbr;
  for (let i = 0; i < abbreviationsKeys.length; i++) {
    if (
      statesAbbreviations[abbreviationsKeys[i]].toLowerCase() ===
      stateLong.toLowerCase()
    ) {
      stateAbbr = abbreviationsKeys[i];
      break;
    }
  }
  return {
    stateFips,
    stateLong,
    stateAbbr,
  };
});
console.log(statesObjARr, "from ");
