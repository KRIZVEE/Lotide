const assertEqual = function(actual, expected) {
  eqArrays(actual, expected);
};

const eqArrays = function(arr1, arr2) {

  let res = true;

  if (arr1.length !== arr2.length) {
    console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
      return false;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  return res;
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
assertEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
const words2 = ['LightHouse Labs', 'Bootcamp'];
assertEqual(map(words2, word => word[0]), ['L', 'b']);
