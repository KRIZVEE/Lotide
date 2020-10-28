const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let arrLetters = sentence.split(' ').join('');
  let result = {};
  for (let char of arrLetters) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result;
};


console.log(countLetters("lighthouse in the house"));
let list = "lighthouse in the house";
let obj = countLetters(list);
assertEqual(obj['l'], 1);
assertEqual(obj['h'], 4);
assertEqual(obj['o'], 1);
assertEqual(obj['@'], undefined);
