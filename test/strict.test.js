const {describe, it} = require('node:test');
const assert = require('assert');
const {strict, char, sequence} = require('../build');

describe('Testing strict parser', () => {
  const parser = strict(sequence(char('a'), char('b')));
  it('Should parse without rest', () => {
    const {result} = parser.parse('ab');

    assert.equal(result, 'ab');
  });

  it('Should not parse due to rest', () => {
    const {error} = parser.parse('abaa');

    assert.notEqual(error, null);
  });
});
