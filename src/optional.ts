import {Parser} from './types';

export function optional(parser: Parser): Parser {
  return {
    parse(input) {
      const result = parser.parse(input);
      if (result.error === null) return result;

      return {
        error: null,
        rest: input,
        result: '',
      };
    },
    toString() {
      return `(${parser.toString()})?`;
    },
  };
}
