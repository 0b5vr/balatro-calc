import { isCardRank } from '../isCardRank';
import { resultAddMults } from '../resultAddMults';
import { JokerBehavior } from './JokerBehavior';

export const fibonacciBehavior: JokerBehavior = {
  displayName: 'Fibonacci',
  rarity: 'Uncommon',
  onCardTriggered(result, board, joker, scored) {
    if (
      isCardRank(board, scored, 'A') ||
      isCardRank(board, scored, '2') ||
      isCardRank(board, scored, '3') ||
      isCardRank(board, scored, '5') ||
      isCardRank(board, scored, '8')
    ) {
      const subject = `${scored.toDisplayString()} (${joker.toDisplayString()})`;
      resultAddMults(result, subject, 8);
    }
  },
};
