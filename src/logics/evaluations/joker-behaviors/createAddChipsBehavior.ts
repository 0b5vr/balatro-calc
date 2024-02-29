import { JokerRarity } from '../../JokerRarity';
import { validateInteger } from '../../validations/validateInteger';
import { resultAddChips } from '../resultAddChips';
import { JokerBehavior } from './JokerBehavior';

export const createAddChipsBehavior = (displayName: string, rarity: JokerRarity): JokerBehavior => ({
  displayName,
  rarity,
  evaluate(result, _board, joker) {
    const value = parseInt(joker.params.value ?? '0', 10);
    resultAddChips(result, joker.toDisplayString(), value);
  },
  params: {
    'value': {
      label: 'Chips',
      default: '0',
      validate: validateInteger,
    },
  },
});
