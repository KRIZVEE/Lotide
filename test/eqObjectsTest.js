const assertEqual = require("../assertEqual");
const eqObjects = require("../eqObjects");

console.log(' Only primitive type as values ');
const a = { a:1,b:"2"};
const b = { a:1,b:"2"};
const c = { a:1,b:2};
const d = { a:undefined,b:2,c:true};
const e = { a:undefined,b:2,c:true};

assertEqual(eqObjects(a,b), true);
assertEqual(eqObjects(a,c), false);
assertEqual(eqObjects(d,e), true);

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

assertEqual(eqObjects(p,q), true);
assertEqual(eqObjects(p,r), false);

console.log(' Test Cases for Object as values ');

const x = {a: {a:123, b:456},b:'bool'};
const y = {a: {a:123, b:456},b:'bool'};
const z = {a: {a:123, b:456},b:'bool',z:'z'};
assertEqual(eqObjects(x,y), true);
assertEqual(eqObjects(x,z), false);

// console.log(' Test Cases for Object and Array as values ');
// const j = { a: "1", b: "undefined", c: [1, 2, 3, { q: 2, t: 3, p: 4 }, 'bool', true, { a: undefined }] };
// const k = { a: "1", b: "undefined", c: [1, 2, 3, { q: 2, t: 3, p: 4 }, 'bool', true, { a: undefined }] };
// const l = { a: "1", b: "undefined", c: [1, 2, 3, { q: 2, t: 3, p: '4' }, 'bool', true, { a: undefined }] };
// assertEqual(eqObjects(j,k), true);
// assertEqual(eqObjects(j,l), false);