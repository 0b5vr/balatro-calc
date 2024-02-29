import { resultMultMults } from '../resultMultMults';
import { JokerBehavior } from './JokerBehavior';

export const cardSharpBehavior: JokerBehavior = {
  displayName: 'Card Sharp',
  rarity: 'Uncommon',
  evaluate(result, _board, joker) {
    resultMultMults(result, joker.toDisplayString(), 3);
    result.conditions.push('Card Sharp needs to meet the condition that the hand has already been played this round to take effect');
  },
}
