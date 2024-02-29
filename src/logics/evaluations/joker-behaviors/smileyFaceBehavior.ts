import { isCardFace } from '../isCardFace';
import { resultAddMults } from '../resultAddMults';
import { JokerBehavior } from './JokerBehavior';

export const smileyFaceBehavior: JokerBehavior = {
  displayName: 'Smiley Face',
  rarity: 'Common',
  onCardTriggered(result, board, joker, scored) {
    if (isCardFace(board, scored)) {
      const subject = `${scored.toDisplayString()} (${joker.toDisplayString()})`;
      resultAddMults(result, subject, 4);
    }
  },
}
