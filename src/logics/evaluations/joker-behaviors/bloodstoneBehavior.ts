import { isCardSuit } from '../isCardSuit';
import { resultMultMults } from '../resultMultMults';
import { boardProbability } from '../boardProbability';
import { JokerBehavior } from './JokerBehavior';

export const bloodstoneBehavior: JokerBehavior = {
  rarity: 'Uncommon',
  onCardTriggered(result, board, joker, scored) {
    if (isCardSuit(board, scored, 'h')) {
      if (boardProbability(result, board, 1.0 / 3.0)) {
        const subject = `${scored.toDisplayString()} (${joker.toDisplayString()})`;
        resultMultMults(result, subject, 2);
      }
    }
  },
}
