import { resultMultMults } from '../resultMultMults';
import { JokerBehavior } from './JokerBehavior';

export const acrobatBehavior: JokerBehavior = {
  displayName: 'Acrobat',
  rarity: 'Uncommon',
  evaluate(result, _board, joker) {
    resultMultMults(result, joker.toDisplayString(), 3);
    result.conditions.push('Acrobat needs to be the final hand of the round to take effect');
  },
}
