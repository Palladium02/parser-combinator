import {Parser} from './types';

export function zeroOrMore(parser: Parser): Parser {
  return {
    parse(input) {
      let rest = input;
      while (rest !== '') {
        const result = parser.parse(rest);
        if (result.error !== null) {
          return {
            error: null,
            rest,
            result: input.slice(0, input.length - rest.length),
          };
        }

        rest = result.rest;
      }

      return {
        error: null,
        rest: '',
        result: input,
      };
    },
    toString() {
      return `(${parser.toString()})*`;
    },
  };
}
