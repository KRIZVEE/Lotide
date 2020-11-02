const assertEqualTail = function(actual, expected) {

  if (actual.length !== expected.length) {
    return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
    }
  }
  return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

module.exports = assertEqualTail;