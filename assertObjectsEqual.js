// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  return eqObjects(actual,expected);

};

const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(obj1, obj2) {
  const inspect = require('util').inspect; // <= add this line

  let keysOfObj1 = Object.keys(obj1);
  let keysOfObj2 = Object.keys(obj2);

  // condition checking if both objects are having same number of keys
  if (keysOfObj1.length !== keysOfObj2.length) {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
    return false;
  }
  // condition checking kvp of obj1 is exactly same as kvp of obj2
  for (let key1 of keysOfObj1) {
    for (let key2 of keysOfObj2) {
      let isK1K2Equal = (key1 === key2);
      let isObj1ValueArray = Array.isArray(obj1[key1]);
      let isObjValuesEqual = eqArrays(obj1[key1], obj2[key2]);
      // condition for only primitive scenario
      if (isObj1ValueArray) {
        if (isK1K2Equal && !(isObjValuesEqual)) {
          console.log(`🔴🔴🔴 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
          return false;
        }
      } else { // condition for only primitive scenario
        if (isK1K2Equal && obj1[key1] !== obj2[key1]) {
          console.log(`🔴🔴🔴 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
          return false;
        }
      }
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  return true;
};

console.log('Test Cases for Array as Value');
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);
console.log('Test Cases for Primitive as Value');
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc1 = { a: "1", b: "2", c: "3" };
const abc2 = { a: "1", b: "undefined", c: "3" };
const abc3 = { a: "1", b: "2", c: 'jack' };
const abc4 = { a: "1", b: 2, c: 'jack' };
const abc5 = { a: "1", b: "undefined", c: '3' };
assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc1);
assertObjectsEqual(abc4, abc3);
assertObjectsEqual(abc2, abc5);