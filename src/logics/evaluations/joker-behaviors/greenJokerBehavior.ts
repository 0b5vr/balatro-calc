import { validateInteger } from '../../validations/validateInteger';
import { resultAddLog } from '../resultAddLog';
import { resultAddMults } from '../resultAddMults';
import { JokerBehavior } from './JokerBehavior';

export const greenJokerBehavior: JokerBehavior = {
  displayName: 'Green Joker',
  rarity: 'Common',
  onBeforeEvaluate(result, _board, joker) {
    const value = parseInt(joker.params.value ?? '0', 10) + 1;
    joker.params.value = value.toString();

    resultAddLog(result, joker.toDisplayString(), `Upgrade! (+${value} mult)`);
  },
  evaluate(result, _board, joker) {
    const value = parseInt(joker.params.value ?? '0', 10);
    resultAddMults(result, joker.toDisplayString(), value);
  },
  params: {
    'value': {
      label: 'Mult',
      default: '0',
      validate: validateInteger,
    }
  },
};
