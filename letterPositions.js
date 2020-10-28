const assertArraysEqual = function(arr1, arr2){
  return eqArrays(arr1,arr2)
}

const eqArrays = function(actual, expected) {

  let res = true;

  if (actual.length !== expected.length) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }

  for (let i = 0; i < expected.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
      return false;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  return res;

}


const letterPosition = function (sentence) {
  const results = {}
  let letterStr = sentence;
  //.split(' ').join('');
  for (let key of Object.keys(letterStr)) {
    let keyIndex = Number(key);
    let keyValue = letterStr[key];
    // console.log(`key : ${key} and value is ${letterStr[key]}`);
    if (results[keyValue]) {
      results[keyValue].push(keyIndex)
    } else {
      // results[keyValue] = new Array(keyIndex); this does not work Need to ask why
      results[keyValue] = [keyIndex];
    }
  }
  // console.log(results);
  return results;
};

let resultantDict = letterPosition('hello');
console.log(assertArraysEqual(resultantDict['l'],[2, 3]));
console.log(assertArraysEqual(resultantDict.h,[0]));
console.log('----------');
let resDict = letterPosition("lighthouse in the house");
console.log(assertArraysEqual(resDict['i'],[1, 11]));
console.log(assertArraysEqual(resDict.h,[3, 5, 15, 18]));
