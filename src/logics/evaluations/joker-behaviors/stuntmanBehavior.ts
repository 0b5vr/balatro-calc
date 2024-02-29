import { resultAddChips } from '../resultAddChips';
import { JokerBehavior } from './JokerBehavior';

export const stuntmanBehavior: JokerBehavior = {
  displayName: 'Stuntman',
  rarity: 'Uncommon',
  evaluate(result, _board, joker) {
    resultAddChips(result, joker.toDisplayString(), 300);
  },
};
