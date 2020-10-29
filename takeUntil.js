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

const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
assertEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
assertEqual(takeUntil(data2, x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ]);
