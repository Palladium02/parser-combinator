const {describe, it} = require('node:test');
const assert = require('assert');
const {anyOf, char} = require('../build');

describe('Testing anyOf parser', () => {
  const parser = anyOf(char('a'), char('b'));
  it('Should parse single character', () => {
    const {result} = parser.parse('a');

    assert.equal(result, 'a');
  });

  it('Should also parse the other option', () => {
    const {result} = parser.parse('b');

    assert.equal(result, 'b');
  });

  it('Should parse and return rest', () => {
    const {rest} = parser.parse('ab');

    assert.equal(rest, 'b');
  });

  it('Should not parse wrong character', () => {
    const {error} = parser.parse('c');

    assert.notEqual(error, null);
  });
});
