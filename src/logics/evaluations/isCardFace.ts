import { Board } from '../Board';
import { PlayingCard } from '../PlayingCard';

export function isCardFace(board: Board, card: PlayingCard): boolean {
  if (card.enhancement === 'Stone') {
    return false;
  }

  if (board.hasJoker('Pareidolia')) {
    return true;
  }

  return card.rank === 'J' || card.rank === 'Q' || card.rank === 'K';
}
