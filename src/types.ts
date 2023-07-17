export type Parser = {
  parse(input: string): ParseResult;
  toString(): string;
};

export type ParseResult = Ok | Err;

export type Ok = {
  error: null;
  result: string;
  rest: string;
};

export type Err = {
  error: string;
};
