import { resultAddLog } from '../resultAddLog';
import { JokerBehavior } from './JokerBehavior';

export const seanceBehavior: JokerBehavior = {
  displayName: 'Séance',
  rarity: 'Rare',
  onBeforeEvaluate(result, _board, joker) {
    if (result.handResult!.hand === 'StraightFlush') {
      resultAddLog(result, joker.toDisplayString(), '+1 Spectral');
    }
  },
}
