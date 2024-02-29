import { isCardRank } from '../isCardRank';
import { resultAddChips } from '../resultAddChips';
import { JokerBehavior } from './JokerBehavior';

export const oddToddBehavior: JokerBehavior = {
  displayName: 'Odd Todd',
  rarity: 'Common',
  onCardTriggered(result, board, joker, scored) {
    if (
      isCardRank(board, scored, 'A') ||
      isCardRank(board, scored, '3') ||
      isCardRank(board, scored, '5') ||
      isCardRank(board, scored, '7') ||
      isCardRank(board, scored, '9')
    ) {
      const subject = `${scored.toDisplayString()} (${joker.toDisplayString()})`;
      resultAddChips(result, subject, 30);
    }
  },
};
