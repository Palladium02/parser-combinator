import {Parser} from './types';

export function anyOf(...parsers: Parser[]): Parser {
  return {
    parse(input) {
      for (const parser of parsers) {
        const result = parser.parse(input);
        if (result.error === null) return result;
      }
      return {
        error: `None of the given parser could match the input. Expected (${parsers
          .map(p => p.toString())
          .join('|')}) got "${input}"`,
      };
    },
    toString() {
      return `(${parsers.map(p => p.toString()).join('|')})`;
    },
  };
}
