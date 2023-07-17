const {describe, it} = require('node:test');
const assert = require('assert');
const {char} = require('../build');

describe('Testing char parser', () => {
  const parser = char('a');
  it('Should parse single character', () => {
    const {result} = parser.parse('a');

    assert.equal(result, 'a');
  });

  it('Should parse single character and return rest', () => {
    const {rest} = parser.parse('a');

    assert.equal(rest, '');
  });

  it('Should not parse wrong character', () => {
    const {error} = parser.parse('b');

    assert.notEqual(error, null);
  });
});
