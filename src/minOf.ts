import {Parser} from './types';

export function minOf(n: number, parser: Parser): Parser {
  return {
    parse(input) {
      let rest = input;
      let iterations = 0;
      const results: string[] = [];
      while (rest.length > 0) {
        const result = parser.parse(rest);
        if (result.error !== null) {
          if (iterations >= n) break;
          return {
            error: result.error,
          };
        }

        rest = result.rest;
        results.push(result.result);
        iterations++;
      }

      if (iterations < n)
        return {
          error: `The parser was only satisfied ${iterations} of at least ${n} times`,
        };

      return {
        result: results.join(''),
        rest,
        error: null,
      };
    },
    toString() {
      return `${parser.toString()}{${n},}`;
    },
  };
}
