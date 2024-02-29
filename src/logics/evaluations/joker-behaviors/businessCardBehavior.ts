import { boardProbability } from '../boardProbability';
import { isCardFace } from '../isCardFace';
import { resultAddLog } from '../resultAddLog';
import { JokerBehavior } from './JokerBehavior';

export const businessCardBehavior: JokerBehavior = {
  displayName: 'Business Card',
  rarity: 'Common',
  onCardTriggered(result, board, joker, scored) {
    if (isCardFace(board, scored) && boardProbability(result, board, 1.0 / 2.0)) {
      const subject = `${scored.toDisplayString()} (${joker.toDisplayString()})`;
      resultAddLog(result, subject, '$2');
    }
  },
};
