import { Rank } from '../Rank';
import { Suit } from '../Suit';
import { validateRank } from './validateRank';
import { validateSuit } from './validateSuit';

export function validateRankSuit(input: string): input is `${Rank}${Suit}` {
  return (
    validateRank(input[0]) &&
    validateSuit(input[1])
  );
}
