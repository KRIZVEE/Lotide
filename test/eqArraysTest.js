const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

console.log('------normal Arrays');
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true);
console.log('------nesting of Arrays');
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]),true); // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]),false); // => false
assertEqual(eqArrays([1, 2, [3,4], [5]], [1, 2, [3,4], [6]]), false);
assertEqual(eqArrays([1, 2, [3,4], [5],[],[[[[4],6],[[]]]]], [1, 2, [3,4], [5],[],[[[[4],6],[[]]],8]]),false);
assertEqual(eqArrays([1, 2, [3,4], [5],[],[[[[4],6],[[]]]]], [1, 2, [3,4], [5],[],[[[[4],6],[[]]]]]),true);
assertEqual(eqArrays([1, 2, [3,4], [5]], [1, 2, [3,4], [5]]),true); // => true