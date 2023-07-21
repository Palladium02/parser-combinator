const {describe, it} = require('node:test');
const assert = require('assert');
const {rangeOf, char} = require('../build');

describe('Testing rangeOf parser', () => {
  const parser = rangeOf([2, 3], char('a'));
  it('Should parse lower bound of range', () => {
    const {result} = parser.parse('aa');

    assert.equal(result, 'aa');
  });

  it('Should parse upper bound of range', () => {
    const {result} = parser.parse('aaa');

    assert.equal(result, 'aaa');
  });

  it('Should also accept longer input', () => {
    const {rest} = parser.parse('aaaa');

    assert.equal(rest, 'a');
  });

  it('Should fail if lower bound is not reached', () => {
    const {error} = parser.parse('b');

    assert.notEqual(error, null);
  });
});
