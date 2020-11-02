const assertArraysEqual = require("../assertArraysEqual");
const letterPositions = require("../letterPositions");

let resultantDict = letterPositions('hello');
assertArraysEqual(resultantDict['l'],[2, 3]);
assertArraysEqual(resultantDict.h,[0]);
console.log('----------');
let resDict = letterPositions("lighthouse in the house");
assertArraysEqual(resDict['i'],[1, 11]);
assertArraysEqual(resDict.h,[3, 5, 15, 18]);