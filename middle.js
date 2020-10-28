const eqArrays = function (arr1, arr2) {

  let res = true;

  if (arr1.length !== arr2.length) {
    console.log("\x1b[31m%s\x1b[0m", `🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log("\x1b[31m%s\x1b[0m", `🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
      return false;
    }
  }
  console.log("\x1b[32m%s\x1b[0m",`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  return res;
}

const assertArraysEqual = function (arr1, arr2) {
  return eqArrays(arr1, arr2);
}

const middle = function (arr) {
  let arrLength = arr.length;
  let resArr = []
  if (arrLength === 1 || arrLength === 2) {
    return resArr;
  }else if (arrLength % 2 !== 0) {
    let ele = arr[Math.floor((arrLength / 2))]
    resArr.push(ele)
  } else {
    let ele_1 = arr[Math.floor((arrLength / 2)-1)];
    console.log(ele_1);
    
    let ele_2 = arr[Math.floor((arrLength / 2))];
    resArr.push(ele_1);
    resArr.push(ele_2);
  }
  return resArr
}

console.log(assertArraysEqual(middle([1]),[])) // => []
console.log(assertArraysEqual(middle([1, 2]),[])) // => []
console.log(assertArraysEqual(middle([1, 2, 3]),[2,3])) // => [2]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]),[3])) // => [3]
console.log(assertArraysEqual(middle([1, 2, 3, 4]),[2,3])) // => [2, 3]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4])) // => [3, 4]