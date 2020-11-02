const assert = require("chai").assert;
const head = require('../head');

describe("#head", () => {

  it('returns 1 for [1,2,3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it('returns 5 for [5]', () => {
    assert.strictEqual(head([5]), 5);
  });

  it('returns 1 for [1,2,[3],{a:3,b:[5]},4]', () => {
    assert.strictEqual(head([1, 2, 3, 4]), 1);
  });

  it('returns \'hi\' for [\'hi\',\'hey\']', () => {
    assert.strictEqual(head(['hi', 'hey']), 'hi');
  });

  it('returns undefined for []', () => {
    assert.strictEqual(head([]), undefined);
  });

  it('returns [2] for [[2],4]', () => {
    assert.deepEqual(head([[2], 4]), [2]);
  });

});