import { validateInteger } from '../../validations/validateInteger';
import { getJokerParams } from '../getJokerParams';
import { resultAddLog } from '../resultAddLog';
import { resultAddMults } from '../resultAddMults';
import { JokerBehavior } from './JokerBehavior';

export const greenJokerBehavior: JokerBehavior = {
  displayName: 'Green Joker',
  rarity: 'Common',
  onBeforeEvaluate(result, board, joker) {
    const params = getJokerParams(board, joker);
    const value = parseInt(params.value ?? '0', 10) + 1;
    params.value = value.toString();

    resultAddLog(result, joker.toDisplayString(), `Upgrade! (+${value} mult)`);
  },
  evaluate(result, board, joker) {
    const params = getJokerParams(board, joker);
    const value = parseInt(params.value ?? '0', 10);
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
