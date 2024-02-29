import { HandResult } from '../../HandResult';
import { resultMultMults } from '../resultMultMults';
import { JokerBehavior } from './JokerBehavior';

export const createContainMultMultsJokerBehavior = (displayName: string, key: keyof HandResult, mults: number): JokerBehavior => ({
  displayName,
  rarity: 'Rare',
  evaluate(result, _board, joker) {
    if (result.handResult![key]) {
      resultMultMults(result, joker.toDisplayString(), mults);
    }
  },
});
