const {describe, it} = require('node:test');
const assert = require('assert');
const {word, lowercase, uppercase} = require('../build');

describe('Testing word parser', () => {
  it('Should generate a valid parser for a given word', () => {
    const parser = word('hello');
    const {result} = parser.parse('hello');

    assert.equal(result, 'hello');
  });
});

describe('Testing lowercase parser', () => {
  it('Should accept any lowercase latin character', () => {
    const parser = lowercase;
    const {result} = parser.parse('h');

    assert.equal(result, 'h');
  });

  it('Should not accept any uppercase latin character', () => {
    const parser = lowercase;
    const {error} = parser.parse('H');

    assert.notEqual(error, null);
  });
});

describe('Testing uppercase parser', () => {
  it('Should accept any uppercase latin character', () => {
    const parser = uppercase;
    const {result} = parser.parse('H');

    assert.equal(result, 'H');
  });

  it('Should not accept any lowercase latin character', () => {
    const parser = uppercase;
    const {error} = parser.parse('h');

    assert.notEqual(error, null);
  });
});
