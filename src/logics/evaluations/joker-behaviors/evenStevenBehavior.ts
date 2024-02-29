import { isCardRank } from '../isCardRank';
import { resultAddMults } from '../resultAddMults';
import { JokerBehavior } from './JokerBehavior';

export const evenStevenBehavior: JokerBehavior = {
  displayName: 'Even Steven',
  rarity: 'Common',
  onCardTriggered(result, board, joker, scored) {
    if (
      isCardRank(board, scored, '2') ||
      isCardRank(board, scored, '4') ||
      isCardRank(board, scored, '6') ||
      isCardRank(board, scored, '8') ||
      isCardRank(board, scored, 'T')
    ) {
      const subject = `${scored.toDisplayString()} (${joker.toDisplayString()})`;
      resultAddMults(result, subject, 4);
    }
  },
};
