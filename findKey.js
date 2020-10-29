const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKey = function(obj, callback) {
  let result = '';
  for (let key of Object.keys(obj)) {
    if (callback(obj[key])) {
      result = key;
      return result;
    }
  }
  return result;
};

let dict1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

assertEqual(findKey(dict1, x => x.stars === 2), "noma");
assertEqual(findKey(dict1, x => x.stars === 2), "Ora");
