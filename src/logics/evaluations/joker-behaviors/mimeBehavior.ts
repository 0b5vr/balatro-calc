import { JokerBehavior } from './JokerBehavior';

export const mimeBehavior: JokerBehavior = {
  displayName: 'Mime',
  rarity: 'Uncommon',
  shouldRetriggerHandCard() {
    return true;
  },
};
