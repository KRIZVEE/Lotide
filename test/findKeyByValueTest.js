const assertEqual = require("../assertEqual");
const findKeyByValue = require("../findKeyByValue");

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre,"The Wire"));

assertEqual(findKeyByValue(bestTVShowsByGenre,"The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre,"That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre,"That '70s Show"), 'found');
assertEqual(findKeyByValue(bestTVShowsByGenre,"That '70s Show"), 'undefined');