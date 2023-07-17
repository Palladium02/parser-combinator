import {Parser} from './types';

export function sequence(...parsers: Parser[]): Parser {
  return {
    parse(input) {
      try {
        const results: string[] = [];
        const rest = parsers.reduce<string>((acc, current) => {
          const result = current.parse(acc);
          if (result.error !== null) throw new Error(result.error);
          results.push(result.result);
          return result.rest;
        }, input);

        return {
          error: null,
          result: results.join(''),
          rest,
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
      return parsers.reduce<string>((acc, p) => {
        return acc + p.toString();
      }, '');
    },
  };
}
