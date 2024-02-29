import { isCardRank } from '../isCardRank';
import { resultAddChips } from '../resultAddChips';
import { resultAddMults } from '../resultAddMults';
import { JokerBehavior } from './JokerBehavior';

export const walkieTalkieBehavior: JokerBehavior = {
  displayName: 'Walkie Talkie',
  rarity: 'Common',
  onCardTriggered(result, board, joker, scored) {
    if (isCardRank(board, scored, 'T') || isCardRank(board, scored, '4')) {
      const subject = `${scored.toDisplayString()} (${joker.toDisplayString()})`;
      resultAddChips(result, subject, 10);
      resultAddMults(result, subject, 4);
    }
  },
};
