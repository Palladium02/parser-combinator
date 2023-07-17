import {Parser} from './types';

export function nOf(n: number, parser: Parser): Parser {
  return {
    parse(input) {
      let i = 0;
      let rest = input;
      try {
        while (i < n) {
          const result = parser.parse(rest);
          if (result.error !== null) throw new Error(result.error);
          rest = result.rest;
          i++;
        }

        return {
          error: null,
          rest,
          result: input.slice(0, n),
        };
      } catch (exception) {
        if (exception instanceof Error)
          return {
            error: exception.message,
          };
        return {
          error: 'Something unexpected happened',
        };
      }
    },
    toString() {
      return `(${parser.toString()}){${n}}`;
    },
  };
}
