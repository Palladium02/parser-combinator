const {describe, it} = require('node:test');
const assert = require('assert');
const {sequence, char} = require('../build');

describe('Testing sequence parser', () => {
  const parser = sequence(char('h'), char('i'));
  it('Should parse word "hi" character', () => {
    const {result} = parser.parse('hi');

    assert.equal(result, 'hi');
  });

  it('Should parse word "hi" character and return rest', () => {
    const {rest} = parser.parse('hi world');

    assert.equal(rest, ' world');
  });

  it('Should not parse wrong combination of parsers', () => {
    const {error} = parser.parse('b');

    assert.notEqual(error, null);
  });
});
