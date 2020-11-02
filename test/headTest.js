const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([1,2,3,4]),1);
assertEqual(head(['hi','hey']),'hello');
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);
assertEqual(head([]), 'undefined');