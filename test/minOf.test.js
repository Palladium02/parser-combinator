const {describe, it} = require('node:test');
const assert = require('assert');
const {minOf, char} = require('../build');

describe('Testing minOf parser', () => {
  const parser = minOf(2, char('a'));
  it('Should parse lower bound', () => {
    const {result} = parser.parse('aa');

    assert.equal(result, 'aa');
  });

  it('Should parse more than one of the correct character', () => {
    const {result} = parser.parse('aaaa');

    assert.equal(result, 'aaaa');
  });

  it('Should fail for unsatisfied parser', () => {
    const {error} = parser.parse('');

    assert.notEqual(error, null);
  });
});
