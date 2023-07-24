import {Parser} from './types';

export function strict(parser: Parser): Parser {
  return {
    parse(input) {
      const result = parser.parse(input);
      if (result.error !== null) return result;
      if (result.rest !== '')
        return {
          error:
            'Parsing the input leaves a rest which is not allowed with the strict constraint is on',
        };
      return result;
    },
    toString() {
      return `^${parser.toString()}$`;
    },
  };
}
