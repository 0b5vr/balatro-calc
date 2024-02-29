import { isCardRank } from '../isCardRank';
import { JokerBehavior } from './JokerBehavior';

export const hackBehavior: JokerBehavior = {
  displayName: 'Hack',
  rarity: 'Uncommon',
  shouldRetriggerCard(_result, board, _joker, scored) {
    return (
      isCardRank(board, scored, '2') ||
      isCardRank(board, scored, '3') ||
      isCardRank(board, scored, '4') ||
      isCardRank(board, scored, '5')
    );
  },
};
