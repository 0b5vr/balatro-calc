import { isCardSuit } from '../isCardSuit';
import { resultAddLog } from '../resultAddLog';
import { JokerBehavior } from './JokerBehavior';

export const roughGemBehavior: JokerBehavior = {
  displayName: 'Rough Gem',
  rarity: 'Uncommon',
  onCardTriggered(result, board, joker, scored) {
    if (isCardSuit(board, scored, 'd')) {
      const subject = `${scored.toDisplayString()} (${joker.toDisplayString()})`;
      resultAddLog(result, subject, '$1');
    }
  },
};
