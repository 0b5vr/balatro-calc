import { resultMultMults } from '../resultMultMults';
import { JokerBehavior } from './JokerBehavior';

export const driversLicenseBehavior: JokerBehavior = {
  displayName: 'Driver\'s License',
  rarity: 'Rare',
  evaluate(result, _board, joker) {
    resultMultMults(result, joker.toDisplayString(), 3);
    result.conditions.push('Driver\'s License needs to meet the condition that you have at least 16 enhanced cards to take effect');
  },
}
