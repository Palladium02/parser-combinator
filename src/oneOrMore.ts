import {Parser} from './types';

export function oneOrMore(parser: Parser): Parser {
  return {
    parse(input: string) {
      let iterations = 0;
      let rest = input;
      let lastError = '';

      const results: string[] = [];
      const shouldRun = true;

      while (shouldRun) {
        const result = parser.parse(rest);
        if (result.error !== null) {
          lastError = result.error;
          break;
        }

        rest = result.rest;
        results.push(result.result);
        iterations++;
      }

      if (iterations === 0)
        return {
          error: lastError,
        };

      return {
        rest,
        result: results.join(''),
        error: null,
      };
    },
    toString() {
      return `(${parser.toString()})+`;
    },
  };
}
