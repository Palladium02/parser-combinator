import {anyOf} from './anyOf';
import {char} from './char';
import {sequence} from './sequence';
import {Parser} from './types';

export const lowercase = anyOf(
  char('a'),
  char('b'),
  char('c'),
  char('d'),
  char('e'),
  char('f'),
  char('g'),
  char('h'),
  char('i'),
  char('j'),
  char('k'),
  char('l'),
  char('m'),
  char('n'),
  char('o'),
  char('p'),
  char('q'),
  char('r'),
  char('s'),
  char('t'),
  char('u'),
  char('v'),
  char('w'),
  char('x'),
  char('y'),
  char('z')
);

export const uppercase = anyOf(
  char('a'.toUpperCase()),
  char('b'.toUpperCase()),
  char('c'.toUpperCase()),
  char('d'.toUpperCase()),
  char('e'.toUpperCase()),
  char('f'.toUpperCase()),
  char('g'.toUpperCase()),
  char('h'.toUpperCase()),
  char('i'.toUpperCase()),
  char('j'.toUpperCase()),
  char('k'.toUpperCase()),
  char('l'.toUpperCase()),
  char('m'.toUpperCase()),
  char('n'.toUpperCase()),
  char('o'.toUpperCase()),
  char('p'.toUpperCase()),
  char('q'.toUpperCase()),
  char('r'.toUpperCase()),
  char('s'.toUpperCase()),
  char('t'.toUpperCase()),
  char('u'.toUpperCase()),
  char('v'.toUpperCase()),
  char('w'.toUpperCase()),
  char('x'.toUpperCase()),
  char('y'.toUpperCase()),
  char('z'.toUpperCase())
);

export function word(w: string): Parser {
  const parser = sequence(...w.split('').map(character => char(character)));
  return {
    parse(input: string) {
      return parser.parse(input);
    },
    toString() {
      return w;
    },
  };
}
