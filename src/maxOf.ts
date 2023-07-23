import {Parser} from './types';

export function maxOf(n: number, parser: Parser): Parser {
  return {
    parse(input) {
      let rest = input;
      const results: string[] = [];
      for (let i = 0; i < n; i++) {
        const result = parser.parse(rest);
        if (result.error !== null) break;

        rest = result.rest;
        results.push(result.result);
      }

      return {
        rest,
        result: results.join(''),
        error: null,
      };
    },
    toString() {
      return `${parser.toString()}{,${n}}`;
    },
  };
}
