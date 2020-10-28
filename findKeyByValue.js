const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(dict, dictIncomingvalue){
  let dictKey = undefined;
  for (let key of Object.keys(dict)){
    let value = dict[key];
    if(value === dictIncomingvalue){
      return key
    }
    // console.log(`key is ${key} and value is ${dict[key]}`);
  }
  return dictKey;
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre,"The Wire"));

assertEqual(findKeyByValue(bestTVShowsByGenre,"The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre,"That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre,"That '70s Show"), 'found');
assertEqual(findKeyByValue(bestTVShowsByGenre,"That '70s Show"), 'undefined');