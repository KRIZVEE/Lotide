const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed : ${actual} !== ${expected}`);
  }
};

assertEqual(1,1);
assertEqual('LHL','BC')

const head = function(arr){
  return arr[0]
}

assertEqual(head([1,2,3,4]),1);
assertEqual(head(['hi','hey']),'hello')

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([5]), 5);
assertEqual(head([]), undefined);
assertEqual(head([]), 'undefined');