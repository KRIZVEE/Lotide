const countLetters = require("../countLetters");
const assertEqual = require("../assertEqual");

console.log('Letters mapping in the string "lighthouse in the house":\n',countLetters("lighthouse in the house"));
let list = "lighthouse in the house";
let obj = countLetters(list);
assertEqual(obj['l'], 1);
assertEqual(obj['h'], 4);
assertEqual(obj['o'], 1);
assertEqual(obj['@'], undefined);