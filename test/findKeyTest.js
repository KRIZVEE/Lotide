const findKey = require("../findKey");
const assertEqual = require("../assertEqual");


let dict1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

assertEqual(findKey(dict1, x => x.stars === 2), "noma");
assertEqual(findKey(dict1, x => x.stars === 2), "Ora");
assertEqual(findKey(dict1, x => x.stars === 22), undefined);