const {describe, it} = require('node:test');
const assert = require('assert');
const {maxOf, char} = require('../build');

describe('Testing minOf parser', () => {
  const parser = maxOf(2, char('a'));
  it('Should parse upper bound', () => {
    const {result} = parser.parse('aa');

    assert.equal(result, 'aa');
  });

  it('Should not parse more than the upper bound', () => {
    const {result, rest} = parser.parse('aaaa');

    assert.equal(result, 'aa');
    assert.equal(rest, 'aa');
  });

  it('Should accept empty input as it is the lower bound', () => {
    const {result} = parser.parse('');

    assert.equal(result, '');
  });
});
