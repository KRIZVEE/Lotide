const map = require("../map");
const assertArraysEqual = require("../assertArraysEqual");

const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
const words2 = ['LightHouse Labs', 'Bootcamp'];
assertArraysEqual(map(words2, word => word[0]), ['L', 'b']);