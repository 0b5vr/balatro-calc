import { resultMultMults } from '../resultMultMults';
import { JokerBehavior } from './JokerBehavior';

export const yorickBehavior: JokerBehavior = {
  displayName: 'Yorick',
  rarity: 'Legendary',
  evaluate(result, _board, joker) {
    resultMultMults(result, joker.toDisplayString(), 5);
    result.conditions.push('Yorick needs to meet the condition that 23 discards are used in the run to take effect')
  },
}
