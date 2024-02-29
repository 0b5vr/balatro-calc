import { isCardSuit } from '../isCardSuit';
import { resultAddChips } from '../resultAddChips';
import { JokerBehavior } from './JokerBehavior';

export const arrowheadBehavior: JokerBehavior = {
  displayName: 'Arrowhead',
  rarity: 'Uncommon',
  onCardTriggered(result, board, joker, scored) {
    if (isCardSuit(board, scored, 's')) {
      const subject = `${scored.toDisplayString()} (${joker.toDisplayString()})`;
      resultAddChips(result, subject, 50);
    }
  },
};
