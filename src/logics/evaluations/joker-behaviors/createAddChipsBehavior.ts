import { JokerRarity } from '../../JokerRarity';
import { validateInteger } from '../../validations/validateInteger';
import { getJokerParams } from '../getJokerParams';
import { resultAddChips } from '../resultAddChips';
import { JokerBehavior } from './JokerBehavior';

export const createAddChipsBehavior = (displayName: string, rarity: JokerRarity): JokerBehavior => ({
  displayName,
  rarity,
  evaluate(result, board, joker) {
    const params = getJokerParams(board, joker);
    const value = parseInt(params.value ?? '0', 10);
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
