import { isCardFace } from '../isCardFace';
import { resultAddChips } from '../resultAddChips';
import { JokerBehavior } from './JokerBehavior';

export const scaryFaceBehavior: JokerBehavior = {
  displayName: 'Scary Face',
  rarity: 'Common',
  onCardTriggered(result, board, joker, scored) {
    if (isCardFace(board, scored)) {
      const subject = `${scored.toDisplayString()} (${joker.toDisplayString()})`;
      resultAddChips(result, subject, 30);
    }
  },
};
