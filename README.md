# parser-combinator

parser-combinator is a parser library that delivers
small parsers that can be combined into bigger parsers.

## Usage

### `char(x: string)`

Generates a parser that parses the given input for
the given character. Equivalent to any literal in a
regular expression.

```ts
const parser = char('a'); // <=> Regex(/a/)

parser.parse('a'); // accepts
parser.parse('b'); // rejects

```

### `sequence(ps: ...Parser[])`

Takes an array of parsers. The generated parses parses a string and
checks if the parsers are satisfied in the given order.


```ts
const parser = sequence(char('a'), char('b')); // <=> Regex(/ab/)

parser.parse('ab'); // accepts
parser.parse('ba'); // rejects
```

### `anyOf(ps: ...Parser[])`

Takes an array of parsers. The input must only satisfy only one of the given
parsers.

```ts
const parser = anyOf(char('a'), char('b')); // <=> Regex(/(a|b)/)

parser.parse('a'); // accepts
parser.parse('b'); // accepts
parser.parse('c'); // rejects
```

### `nOf(n: number, p: Parser)`

Takes a number and a parser. The given parser must be satisfied n consecutive times.

```ts
const parser = nOf(2, char('a')); // <=> Regex(/a{2}/)

parser.parse('aa'); // accepts
parser.parse('ab'); // rejects
```

### `zeroOrMore(p: Parser)`

Takes a parser. That parser can but must not be satisfied. If it is satisfied the parser greedily eats from the input until it cannot be satisfied anymore.

```ts
const parser = zeroOrMore(char('a')); // <=> Regex(/a*/)

parser.parse(''); // accepts
parser.parse('a'); // accepts
parser.parse('aaa'); // also accepts
```

### `oneOrMore(p: Parser)`

Takes a parser. That parser but must be satisfied at least once. If it is satisfied the parser greedily eats from the input until it cannot be satisfied anymore.

```ts
const parser = zeroOrMore(char('a')); // <=> Regex(/a+/)

parser.parse('a'); // accepts
parser.parse('aaa'); // accepts
parser.parse(''); // rejects
```

### `minOf(n: number, p: Parser)`

Takes a number n and a parser. The input must satisfy the parser at least n times.

```ts
const parser = minOf(2, char('a')); // <=> Regex(/a{2,}/)

parser.parse('aa'); // accepts
parser.parse('aaaa'); // accepts
parser.parse('a'); // rejects
```

### `maxOf(n: number, p: Parser)`

```ts
const parser = maxOf(2, char('a')); // <=> Regex(/a{,2}/)

parser.parse('aa'); // accepts
parser.parse('a'); // accepts
parser.parse('aaaa'); // rejects
```

### `rangeOf(r: [number, number], p: Parser)`

```ts
const parser = rangeOf([2,3], char('a')); // <=> Regex(/a{2,}/)

parser.parse('aa'); // accepts
parser.parse('aaa'); // accepts
parser.parse('a'); // rejects
```

### `optional(p: Parser)`

Takes a parser. That parser can be satisfied but mustn't. It will only be satisfied once.

```ts
const parser = optional(char('a')); // <=> Regex(/a?/)

parser.parse(''); // accepts
parser.parse('a'); // accepts
```

### `any()`

This parser generator represents accepts any character as input.

```ts
any().parse('?'); // accepts
any().parse('m'); // also fine
```

### `word(w: string)`

This parser generator takes a string and transforms it into a sequence of `char()` parsers.

### `lowercase`

This is a parser that accpets any lowercase latin character.

### `uppercase`

This is a parser that accepts any uppercase latin character.

## Comping parsers

In this section I am going to show you how to
compose parser to get a more complex parser.
We will build a parser that can parser numbers
that are written in scientific notation (e.g. 12e-1 <=> 1.2).

```ts
const uint = anyOf(
  char('0'),
  char('1'),
  char('2'),
  char('3'),
  char('4'),
  char('5'),
  char('6'),
  char('7'),
  char('8'),
  char('9')
);

const int = sequence(
  optional(char('-')),
  uint
);

const float = sequence(int, char('.'), uint);

const scientific = sequence(
  float,
  char('e'),
  int
);
```
