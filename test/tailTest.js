const assertEqualTail = require('../assertEqualTail');
const tail = require('../tail');

assertEqualTail(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
assertEqualTail(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqualTail(tail([1, 2, 3, 5]), [2, 3, 4, 5]);
assertEqualTail(tail([1]), []);
assertEqualTail(tail([]), []);


