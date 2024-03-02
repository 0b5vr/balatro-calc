import { validateNumber } from '../../validations/validateNumber';
import { getJokerParams } from '../getJokerParams';
import { resultAddLog } from '../resultAddLog';
import { resultMultMults } from '../resultMultMults';
import { JokerBehavior } from './JokerBehavior';

export const obeliskBehavior: JokerBehavior = {
  displayName: 'Obelisk',
  rarity: 'Rare',
  onBeforeEvaluate(result, board, joker) {
    const params = getJokerParams(board, joker);
    const value = parseFloat(params.value ?? '1.0') + 0.25;
    params.value = value.toString();

    resultAddLog(result, joker.toDisplayString(), `Upgrade! (x${value} mult)`);
  },
  evaluate(result, board, joker) {
    const params = getJokerParams(board, joker);
    const value = parseFloat(params.value ?? '1.0');

    if (value !== 1.0) {
      resultMultMults(result, joker.toDisplayString(), value);
    }

    result.conditions.push('Obelisk resets to x1 mult if you play any of your most played hand');
  },
  params: {
    'value': {
      label: 'Mult (X)',
      default: '1',
      validate: validateNumber,
    },
  },
}