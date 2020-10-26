const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual('LightHouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual('Hello', 'Hello');
assertEqual(786, 92);
assertEqual('hello', 'HeLLo');
assertEqual(786, 786);