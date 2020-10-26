const assertEqual = function(actual, expected) {

  let res = true;

  if (actual.length !== expected.length) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
      return false;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  return res;
};

const tail = function(arr) {
  let remainingArr = arr.slice(1);
  return remainingArr;
};

assertEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail([1, 2, 3, 5]), [2, 3, 4, 5]);
assertEqual(tail([1]), []);
assertEqual(tail([]), []);

