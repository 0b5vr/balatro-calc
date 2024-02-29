import { HandResult } from '../../HandResult';
import { resultAddChips } from '../resultAddChips';
import { JokerBehavior } from './JokerBehavior';

export const createContainChipsJokerBehavior = (displayName: string, key: keyof HandResult, chips: number): JokerBehavior => ({
  displayName,
  rarity: 'Common',
  evaluate(result, _board, joker) {
    if (result.handResult![key]) {
      resultAddChips(result, joker.toDisplayString(), chips);
    }
  },
});
