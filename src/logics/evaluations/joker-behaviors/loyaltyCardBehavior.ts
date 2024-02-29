import { resultMultMults } from '../resultMultMults';
import { JokerBehavior } from './JokerBehavior';

export const loyaltyCardBehavior: JokerBehavior = {
  displayName: 'Loyalty Card',
  rarity: 'Uncommon',
  evaluate(result, _board, joker) {
    resultMultMults(result, joker.toDisplayString(), 4);
    result.conditions.push('Loyalty Card only applies on every 6th hand played');
  },
};
