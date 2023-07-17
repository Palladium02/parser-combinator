const {describe, it} = require('node:test');
const assert = require('assert');
const {zeroOrMore, char, sequence} = require('../build');

describe('Testing zeroOrMore parser', () => {
  const parser = zeroOrMore(char('a'));
  it('Should parse single character', () => {
    const {result} = parser.parse('a');

    assert.equal(result, 'a');
  });

  it('Empty input should also be accpepted', () => {
    const {result} = parser.parse('');

    assert.equal(result, '');
  });

  it('Should parse following parsers in sequence', () => {
    const parser = sequence(zeroOrMore(char('a')), char('b'));
    const {rest} = parser.parse('b');

    assert.equal(rest, '');
  });
});
