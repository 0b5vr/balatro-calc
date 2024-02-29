import { Rank } from '../Rank';

export function rankToScore(rank: Rank): number {
  return rank === 'A' ? 11 :
    (
      rank === 'K' ||
      rank === 'Q' ||
      rank === 'J' ||
      rank === 'T'
    ) ? 10 :
    parseInt(rank, 10);
}
