const assertArraysEqual = function(arr1, arr2){
  return eqArrays(arr1,arr2)
}

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

}

const without = function (source, itemsToRemove) {
  let res = [];
  let i=0; let j = 0;

  for (let i = 0; i < source.length; i++) {
      if(!itemsToRemove.includes(source[i]))    {
        res.push(source[i])
      }
  }
  return res
}


// console.log(without([1, 2, 3,4,5,'bhb'], [1,2,3,4])) // [2,3]
without([1,2,3], [1]) // [2,3]
assertArraysEqual(without([1,2,3], [1]),[2,3])
// console.log(without(["1","2","3"],[1,2,"3"])) // ["1","2"]

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3])
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])