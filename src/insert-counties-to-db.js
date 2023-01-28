const { counties } = require("./constants/counties-string");

const countiesStrArr = counties.split("\n");

const countiesObjArr = countiesStrArr.map((county) => {
  let countyNameRegExp = /\s.+\w+\s\s/g;
  const countyName = county.match(countyNameRegExp)
    ? county.match(countyNameRegExp)[0].trim()
    : county.match(/\s.+\w/)[0].trim();

  let countyLongRegExp = /\d+/;
  const countyFIPSLong = county.match(countyLongRegExp)[0];
  const countyFIPSShort = countyFIPSLong.substring(2);
  console.log(countyName);
  return {
    countyName,
    countyFIPSLong,
    countyFIPSShort,
  };
});
console.log(countiesObjArr[0]);
