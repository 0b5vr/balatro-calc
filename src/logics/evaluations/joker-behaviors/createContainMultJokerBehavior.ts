import { HandResult } from '../../HandResult';
import { resultAddMults } from '../resultAddMults';
import { JokerBehavior } from './JokerBehavior';

export const createContainMultJokerBehavior = (displayName: string, key: keyof HandResult, mult: number): JokerBehavior => ({
  displayName,
  rarity: 'Common',
  evaluate(result, _board, joker) {
    if (result.handResult![key]) {
      resultAddMults(result, joker.toDisplayString(), mult);
    }
  },
});
