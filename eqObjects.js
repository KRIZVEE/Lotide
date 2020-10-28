const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {

  let res = true;

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return res;
}


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let obj1KeyArr = Object.keys(object1);
  let obj1Len = obj1KeyArr.length;
  let obj2KeyArr = Object.keys(object2);
  let obj2Len = obj2KeyArr.length;
  let res = true;

  // two object can be equal if:
  // 1. both have same number of keys
  if (obj1Len !== obj2Len) {
    return false
  }
  // 2. value of each key in one obj should match with the value of each corresponding key in another object
  for (let obj1Key of obj1KeyArr) {
    if (Array.isArray(object1[obj1Key])) {
      res = eqArrays(object1[obj1Key], object2[obj1Key])
    }
    else if (object1[obj1Key] !== object2[obj1Key]) {
      return false;
    }
  }
  // console.log(Array.isArray(Object.keys(object1)))
  return res;
}


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba));
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true
assertEqual(eqObjects(cd, dc), true);


const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false
assertEqual(eqObjects(cd, cd2), false); 
