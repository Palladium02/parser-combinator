const {describe, it} = require('node:test');
const assert = require('assert');
const {nOf, char} = require('../build');

describe('Testing nOf parser', () => {
  const parser = nOf(2, char('a'));
  it('Should parse correct input', () => {
    const {result} = parser.parse('aa');

    assert.equal(result, 'aa');
  });

  it('Should ignore third matching character', () => {
    const {rest} = parser.parse('aaa');

    assert.equal(rest, 'a');
  });

  it('Should not parse wrong input', () => {
    const {error} = parser.parse('a');

    assert.notEqual(error, null);
  });
});
