export const Hand = [
  'HighCard',
  'OnePair',
  'TwoPairs',
  'ThreeOfAKind',
  'Straight',
  'Flush',
  'FullHouse',
  'FourOfAKind',
  'StraightFlush',
  'FiveOfAKind',
  'FlushHouse',
  'FlushFive',
] as const;
export type Hand = typeof Hand[number];
