import { isCardRank } from '../isCardRank';
import { resultAddChips } from '../resultAddChips';
import { resultAddMults } from '../resultAddMults';
import { JokerBehavior } from './JokerBehavior';

export const scholarBehavior: JokerBehavior = {
  displayName: 'Scholar',
  rarity: 'Common',
  onCardTriggered(result, board, joker, scored) {
    if (isCardRank(board, scored, 'A')) {
      const subject = `${scored.toDisplayString()} (${joker.toDisplayString()})`;
      resultAddChips(result, subject, 20);
      resultAddMults(result, subject, 4);
    }
  },
};
