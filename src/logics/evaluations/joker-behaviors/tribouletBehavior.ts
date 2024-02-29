import { isCardRank } from '../isCardRank';
import { resultMultMults } from '../resultMultMults';
import { JokerBehavior } from './JokerBehavior';

export const tribouletBehavior: JokerBehavior = {
  displayName: 'Triboulet',
  rarity: 'Legendary',
  onCardTriggered(result, board, joker, scored) {
    if (isCardRank(board, scored, 'K') || isCardRank(board, scored, 'Q')) {
      resultMultMults(result, joker.toDisplayString(), 2);
    }
  },
}
