const eqArrays = require("./eqArrays");

const isObject = function(ele) {
  return (typeof ele === "object") && (!Array.isArray(ele));
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(obj1, obj2) {

  let res = true;

  // Two objects are equal <=>
  // 1. They have the same number of keys and same name for keys as well
  // 2. The value for each key in one object is the same as the value for that same key in the other object
  let keysOfObj1 = Object.keys(obj1);
  let keysOfObj2 = Object.keys(obj2);

  // condition checking if both objects are having same number of keys
  if (keysOfObj1.length !== keysOfObj2.length) {
    res = false;
    return false;
  }
  // condition checking kvp of obj1 is exactly same as kvp of obj2
  for (let key1 of keysOfObj1) {
    if (!keysOfObj2.includes(key1)) {
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
    }        else if (res === true && isObject(val1) && isObject(val2)) {
      // check if val1 is object and val2 is an object
      res =  eqObjects(val1, val2);
    } else if (typeof val1 === typeof val2 && val1 === val2) {
      // check if val1 type is eqaul to val2 type
      continue;
    } else {
      res = false;
      return false;
    }
  }
  return res;
};

module.exports = eqObjects;


