const eqObjects = require("./eqObjects");

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  const assert = eqObjects(actual, actual);

  if (assert) {
    console.log("\x1b[32m%s\x1b[0m",`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);

  } else {
    console.log("\x1b[31m%s\x1b[0m", `🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

};

module.exports = assertObjectsEqual;


// const assertObjectsEqual = function(actual, expected) {
//   const inspect = require('util').inspect; // <= add this line
//   // ...
// };

// console.log(`Example label: ${inspect(actual)}`);


// const eqArrays = require('./eqArrays');

// const assertArraysEqual = function(array1, array2) {
//   const assert = eqArrays(array1, array2);

//   if (assert) {
//     console.log("\x1b[32m%s\x1b[0m",`✅✅✅ Assertion Passed: ${array1} === ${array2}`);

//   } else {
//     console.log("\x1b[31m%s\x1b[0m", `🔴🔴🔴 Assertion Failed: ${array1} !== ${array2}`);
//   }
// };

// module.exports = assertArraysEqual;