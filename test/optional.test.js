const {describe, it} = require('node:test');
const assert = require('assert');
const {char, optional, sequence} = require('../build');

describe('Testing char parser', () => {
  const parser = optional(char('a'));
  it('Should parse single character', () => {
    const {result} = parser.parse('a');

    assert.equal(result, 'a');
  });

  it('Should accept empty input', () => {
    const {result} = parser.parse('');

    assert.equal(result, '');
  });

  it('Should continue in sequence', () => {
    const parser = sequence(optional(char('a')), char('b'));
    const {error} = parser.parse('b');

    assert.equal(error, null);
  });
});
