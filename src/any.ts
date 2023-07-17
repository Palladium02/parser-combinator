import {Parser} from './types';

export function any(): Parser {
  return {
    parse(input) {
      if (input.length === 0)
        return {
          error: 'Unexpected end of input',
        };

      const c = input[0];
      const rest = input.slice(1);

      return {
        error: null,
        result: c,
        rest,
      };
    },
    toString() {
      return '.';
    },
  };
}
