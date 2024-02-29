import { resultAddLog } from '../resultAddLog';
import { JokerBehavior } from './JokerBehavior';

export const hikerBehavior: JokerBehavior = {
  displayName: 'Hiker',
  rarity: 'Uncommon',
  onBeforeEvaluate(result, _board, joker) {
    for (const card of result.handResult!.scored) {
      const subject = `${card.toDisplayString()} (${joker.toDisplayString()})`;
      card.extraChips += 4;
      resultAddLog(result, subject, `Extra chips +${card.extraChips}`);
    }
  },
};
