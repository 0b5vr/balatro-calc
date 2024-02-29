import { Board } from '../Board';
import { PlayingCard } from '../PlayingCard';

export function isCardSuit(board: Board, card: PlayingCard, suit: string): boolean {
  if (card.enhancement === 'Stone') {
    return false;
  }

  if (card.enhancement === 'Wild') {
    return true;
  }

  if (board.hasJoker('SmearedJoker')) {
    const cardIsHD = card.suit === 'h' || card.suit === 'd';
    const suitIsHD = suit === 'h' || suit === 'd';
    return cardIsHD === suitIsHD;
  }

  return card.suit === suit;
}
