import { JokerRarity } from '../../JokerRarity';
import { validateInteger } from '../../validations/validateInteger';
import { resultAddMults } from '../resultAddMults';
import { JokerBehavior } from './JokerBehavior';

export const createAddMultBehavior = (displayName: string, rarity: JokerRarity): JokerBehavior => ({
  displayName,
  rarity,
  evaluate(result, _board, joker) {
    const value = parseInt(joker.params.value ?? '0', 10);
    resultAddMults(result, joker.toDisplayString(), value);
  },
  params: {
    'value': {
      label: 'Mult',
      default: '0',
      validate: validateInteger,
    },
  },
});
