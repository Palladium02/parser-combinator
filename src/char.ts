import {Parser, ParseResult} from './types';

export function char(expected: string): Parser {
  if (expected.length !== 1)
    throw new Error('expected has to have a length of one');

  return {
    parse(input: string): ParseResult {
      if (input.length < 1)
        return {
          error: 'Unexpected end of input',
        };

      const c = input[0];
      const rest = input.slice(1);

      if (c !== expected)
        return {
          error: `Unexpected character '${c}' expected '${expected}'`,
        };

      return {
        rest,
        result: c,
        error: null,
      };
    },
    toString() {
      return expected;
    },
  };
}
