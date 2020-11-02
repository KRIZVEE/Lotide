// const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

console.log('XXXXXXXXXXXXXXXXXXXX');

// issue in my program is that it will work for only single cases but not all together

// console.log('------normal Arrays');
console.log(eqArrays([1,2,3],[1,2,3]));
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log('------nesting of Arrays');
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false
console.log(eqArrays([1, 2, [3,4], [5]], [1, 2, [3,4], [6]]));
console.log(eqArrays([1, 2, [3,4], [5],[],[[[[4],6],[[]]]]], [1, 2, [3,4], [5],[],[[[[4],6],[[]]],8]]));
console.log(eqArrays([1, 2, [3,4], [5],[],[[[[4],6],[[]]]]], [1, 2, [3,4], [5],[],[[[[4],6],[[]]]]]));
console.log(eqArrays([1, 2, [3,4], [5]], [1, 2, [3,4], [5]])); // => true