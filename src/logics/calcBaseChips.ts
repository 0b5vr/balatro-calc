import { Hand } from './Hand';

export function calcBaseChips(hand: Hand, level: number): [number, number] {
  let chips = 0;
  let mults = 1;

  const levelMinusOne = level - 1;

  if (hand === 'HighCard') {
    chips = 5 + 10 * levelMinusOne;
    mults = 1 + levelMinusOne;
  } else if (hand === 'OnePair') {
    chips = 10 + 10 * levelMinusOne;
    mults = 2 + levelMinusOne;
  } else if (hand === 'TwoPairs') {
    chips = 20 + 20 * levelMinusOne;
    mults = 2 + levelMinusOne;
  } else if (hand === 'ThreeOfAKind') {
    chips = 30 + 20 * levelMinusOne;
    mults = 3 + 2 * levelMinusOne;
  } else if (hand === 'Straight') {
    chips = 30 + 30 * levelMinusOne;
    mults = 4 + 2 * levelMinusOne;
  } else if (hand === 'Flush') {
    chips = 35 + 15 * levelMinusOne;
    mults = 4 + 2 * levelMinusOne;
  } else if (hand === 'FullHouse') {
    chips = 40 + 25 * levelMinusOne;
    mults = 4 + 2 * levelMinusOne;
  } else if (hand === 'FourOfAKind') {
    chips = 60 + 30 * levelMinusOne;
    mults = 7 + 3 * levelMinusOne;
  } else if (hand === 'StraightFlush') {
    chips = 100 + 40 * levelMinusOne;
    mults = 8 + 3 * levelMinusOne;
  } else if (hand === 'FiveOfAKind') {
    chips = 120 + 35 * levelMinusOne;
    mults = 12 + 3 * levelMinusOne;
  } else if (hand === 'FlushHouse') {
    chips = 140 + 40 * levelMinusOne;
    mults = 14 + 3 * levelMinusOne;
  } else if (hand === 'FlushFive') {
    chips = 160 + 40 * levelMinusOne;
    mults = 16 + 3 * levelMinusOne;
  }

  return [
    Math.max(0, chips),
    Math.max(1, mults),
  ];
}
