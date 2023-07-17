const {describe, it} = require('node:test');
const assert = require('assert');
const {any} = require('../build');

describe('Testing char parser', () => {
  const parser = any();
  it('Should parse single character', () => {
    for (let i = 0; i < 1000; i++) {
      const char = Math.random().toString()[0];
      const {result} = parser.parse(char);
      assert.equal(result, char);
    }
  });
});
