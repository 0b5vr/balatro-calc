import { Board } from '../Board';
import { PlayingCard } from '../PlayingCard';
import { Rank } from '../Rank';

export function isCardRank(_board: Board, card: PlayingCard, rank: Rank): boolean {
  return card.rank === rank;
}
