export const Suit = [
  's',
  'h',
  'd',
  'c',
] as const;
export type Suit = typeof Suit[number];
