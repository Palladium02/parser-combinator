import {Parser} from './types';

export function rangeOf(range: [number, number], parser: Parser): Parser {
  const [min, max] = range;
  return {
    parse(input) {
      let rest = input;
      const results: string[] = [];
      for (let i = 0; i < max; i++) {
        const result = parser.parse(rest);
        if (result.error !== null) {
          if (i >= min) break;
          return {
            error: result.error,
          };
        }

        rest = result.rest;
        results.push(result.result);
      }

      return {
        result: results.join(''),
        rest,
        error: null,
      };
    },
    toString() {
      return `${parser.toString()}{${range.join(',')}}`;
    },
  };
}
