import { isCardSuit } from '../isCardSuit';
import { resultAddMults } from '../resultAddMults';
import { JokerBehavior } from './JokerBehavior';

export const onyxAgateBehavior: JokerBehavior = {
  displayName: 'Onyx Agate',
  rarity: 'Uncommon',
  onCardTriggered(result, board, joker, scored) {
    if (isCardSuit(board, scored, 'c')) {
      const subject = `${scored.toDisplayString()} (${joker.toDisplayString()})`;
      resultAddMults(result, subject, 8);
    }
  },
};
