const eqArrays = function(arr1, arr2) {

  let res = true;

  if (arr1.length !== arr2.length) {
    // console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      // console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
      return false;
    }
  }
  // console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  return res;
}

const assertArraysEqual = function(arr1, arr2){
  return eqArrays(arr1,arr2)
}

console.log(assertArraysEqual([1,2,3],[3,4,5]));
console.log(assertArraysEqual([1,2,3],[1,2,3]));

