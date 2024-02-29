import { validateInteger } from '../../validations/validateInteger';
import { resultAddLog } from '../resultAddLog';
import { resultAddMults } from '../resultAddMults';
import { JokerBehavior } from './JokerBehavior';

export const supernovaBehavior: JokerBehavior = {
  displayName: 'Supernova',
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
      label: 'Played #',
      default: '0',
      validate: validateInteger,
    }
  }
};
