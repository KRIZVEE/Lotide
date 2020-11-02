const assertObjectsEqual = require('../assertObjectsEqual');
const eqObjects = require("../eqObjects");

console.log(' Only primitive type as values ');
const a = { a:1,b:"2"};
const b = { a:1,b:"2"};
const c = { a:1,b:2};
const d = { a:undefined,b:2,c:true};
const e = { a:undefined,b:2,c:true};

assertObjectsEqual(eqObjects(a,b), true);
assertObjectsEqual(eqObjects(a,c), false);
assertObjectsEqual(eqObjects(d,e), true);

console.log(' Test Cases for Array as values ');
const p =
{
  c: "1",
  d: ["2", 3]
};
const q =
{
  d: ["2", 3],
  c: "1"
};
const r = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(eqObjects(p,q), true);
assertObjectsEqual(eqObjects(p,r), false);

console.log(' Test Cases for Object as values ');

const x = {a: {a:123, b:456},b:'bool'};
const y = {a: {a:123, b:456},b:'bool'};
const z = {a: {a:123, b:456},b:'bool',z:'z'};
assertObjectsEqual(eqObjects(x,y), true);
assertObjectsEqual(eqObjects(x,z), false);

console.log(' Test Cases for Object and Array as values ');
const j = { a: "1", b: "undefined", c: [1, 2, 3, { q: 2, t: 3, p: 4 }, 'bool', true, { a: undefined }] };
const k = { a: "1", b: "undefined", c: [1, 2, 3, { q: 2, t: 3, p: 4 }, 'bool', true, { a: undefined }] };
const l = { a: "1", b: "undefined", c: [1, 2, 3, { q: 2, t: 3, p: '4' }, 'bool', true, { a: undefined }] };
assertObjectsEqual(eqObjects(j,k), true);
assertObjectsEqual(eqObjects(j,l), false);