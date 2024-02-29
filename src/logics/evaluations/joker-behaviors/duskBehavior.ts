import { JokerBehavior } from './JokerBehavior';

export const duskBehavior: JokerBehavior = {
  displayName: 'Dusk',
  rarity: 'Uncommon',
  evaluate(result) {
    result.conditions.push('Dusk needs to be the final hand of the round to take effect')
  },
  shouldRetriggerCard() {
    return true;
  },
}
