import { resultAddLog } from '../resultAddLog';
import { JokerBehavior } from './JokerBehavior';

export const hikerBehavior: JokerBehavior = {
  displayName: 'Hiker',
  rarity: 'Uncommon',
  onCardTriggered(result, _board, joker, scored) {
    const subject = `${scored.toDisplayString()} (${joker.toDisplayString()})`;
    scored.extraChips += 4;
    resultAddLog(result, subject, `Upgrade! (+${scored.extraChips})`);
  },
};
