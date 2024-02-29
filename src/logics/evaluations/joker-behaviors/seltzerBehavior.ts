import { JokerBehavior } from './JokerBehavior';

export const seltzerBehavior: JokerBehavior = {
  displayName: 'Seltzer',
  rarity: 'Uncommon',
  shouldRetriggerCard() {
    return true;
  },
}
