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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(obj1, obj2) {
  // Two objects are equal <=>
  // 1. They have the same number of keys
  // 2. The value for each key in one object is the same as the value for that same key in the other object
  let keysOfObj1 = Object.keys(obj1);
  let keysOfObj2 = Object.keys(obj2);

  // condition checking if both objects are having same number of keys
  if (keysOfObj1.length !== keysOfObj2.length) {
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
          return false;
        }
      } else { // condition for only primitive scenario
        if (isK1K2Equal && obj1[key1] !== obj2[key1]) {
          return false;
        }
      }
    }
  }
  return true;
};

console.log('Test Cases for Array as Value');
const cd = 
{ 
  c: "1", 
  d: ["2", 3] 
};
const dc = 
{ 
  d: ["2", 3], 
  c: "1" 
};
assertEqual(eqObjects(cd, dc), true);
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
console.log('Test Cases for Primitive as Value');
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc1 = { a: "1", b: "2", c: "3" };
const abc2 = { a: "1", b: "undefined", c: "3" };
const abc3 = { a: "1", b: "2", c: 'jack' };
const abc4 = { a: "1", b: 2, c: 'jack' };
const abc5 = { a: "1", b: "undefined", c: '3' };
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc1), false);
assertEqual(eqObjects(abc4, abc3), false);
assertEqual(eqObjects(abc2, abc5), true);