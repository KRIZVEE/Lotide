const eqObjects = require("./eqObjects")

// console.log('eqObjects : ',eqObjects);

/*
const eqObjects = function(obj1, obj2) {
  let res = true;

  // Two objects are equal <=>
  // 1. They have the same number of keys and same name for keys as well
  // 2. The value for each key in one object is the same as the value for that same key in the other object
  let keysOfObj1 = Object.keys(obj1);
  let keysOfObj2 = Object.keys(obj2);

  // condition checking if both objects are having same number of keys
  if (keysOfObj1.length !== keysOfObj2.length) {
    console.log('on line no 21');
    res = false;
    return false;
  }
  // condition checking kvp of obj1 is exactly same as kvp of obj2
  for (let key1 of keysOfObj1) {
    if (!keysOfObj2.includes(key1)) {
      console.log('on line no 28');
      res = false;
      return false;
    }
  }
  // value check
  for (let key1 of keysOfObj1) {
    let val1 = obj1[key1];
    let val2 = obj2[key1];

    // check if val1 is array and if val2 is also an array
    if (res === true && Array.isArray(val1) && Array.isArray(val2)) {

      res =  eqArrays(val1, val2);
    } else if (res === true && isObject(val1) && isObject(val2)) {
      // check if val1 is object and val2 is an object
      res =  eqObjects(val1, val2);
    } else if (typeof val1 === typeof val2 && val1 === val2) {
      // check if val1 type is eqaul to val2 type
      continue;
    } else {
      console.log('on line no 51');
      res = false;
      return false;
    }
  }
  console.log('Value of res is : ',res);
  return res;
};*/

const isObject = function(ele) {
  return (typeof ele === "object") && (!Array.isArray(ele));
};

const eqArrays = function(arr1, arr2) {

  let result = true;
  
  if (arr1.length !== arr2.length) {
    result = false;
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i]) && result === true) {
      result =  eqArrays(arr1[i], arr2[i]);
    } else if (isObject(arr1[i]) && isObject(arr2[i]) && result === true) {
      // check if val1 is object and val2 is an object
      result =  eqObjects(arr1[i], arr2[i]);
    } else if (typeof arr1[i] === typeof arr2[i] && arr1[i] === arr2[i]) {
      // check if val1 type is eqaul to val2 type
      continue;
    } else {
      result = false;
      return false;

    }
  }
  return result;

};
module.exports = eqArrays;

