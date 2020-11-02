const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  const assert = eqArrays(array1, array2);

  if (assert) {
    console.log("\x1b[32m%s\x1b[0m",`✅✅✅ Assertion Passed: ${array1} === ${array2}`);

  } else {
    console.log("\x1b[31m%s\x1b[0m", `🔴🔴🔴 Assertion Failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;