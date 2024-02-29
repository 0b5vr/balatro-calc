import { JokerRarity } from '../../JokerRarity';
import { validateNumber } from '../../validations/validateNumber';
import { resultMultMults } from '../resultMultMults';
import { JokerBehavior } from './JokerBehavior';

export const createMultMultsBehavior = (displayName: string, rarity: JokerRarity): JokerBehavior => ({
  displayName,
  rarity,
  evaluate(result, _board, joker) {
    const value = parseFloat(joker.params.value ?? '1.0');

    if (value !== 1.0) {
      resultMultMults(result, joker.toDisplayString(), value);
    }
  },
  params: {
    'value': {
      label: 'Mult (X)',
      default: '1',
      validate: validateNumber,
    },
  },
});
