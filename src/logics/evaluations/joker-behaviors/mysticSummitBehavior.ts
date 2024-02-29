import { resultAddMults } from '../resultAddMults';
import { JokerBehavior } from './JokerBehavior';

export const mysticSummitBehavior: JokerBehavior = {
  displayName: 'Mystic Summit',
  rarity: 'Rare',
  evaluate(result, _board, joker) {
    resultAddMults(result, joker.toDisplayString(), 15);
    result.conditions.push('Mystic Summit needs to meet the condition that 0 discards are remaining in the round');
  },
};
