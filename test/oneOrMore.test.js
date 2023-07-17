const {describe, it} = require('node:test');
const assert = require('assert');
const {oneOrMore, char, sequence} = require('../build');

describe('Testing oneOrMore parser', () => {
  const parser = oneOrMore(char('a'));
  it('Should parse single character', () => {
    const {result} = parser.parse('a');

    assert.equal(result, 'a');
  });

  it('Should parse more than one of the correct character', () => {
    const {result} = parser.parse('aaaa');

    assert.equal(result, 'aaaa');
  });

  it('Empty input should not be accpepted', () => {
    const {error} = parser.parse('');

    assert.notEqual(error, null);
  });

  it('Should not parse following parsers in sequence', () => {
    const parser = sequence(oneOrMore(char('a')), char('b'));
    const {error} = parser.parse('b');

    assert.notEqual(error, null);
  });
});
