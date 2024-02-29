import { JokerRarity } from '../../JokerRarity';
import { JokerBehavior } from './JokerBehavior';

export const createNopJokerBehavior = (
  displayName: string,
  rarity: JokerRarity,
): JokerBehavior => ({
  displayName,
  rarity,
});
