import { validateInteger } from '../../validations/validateInteger';
import { getJokerParams } from '../getJokerParams';
import { resultAddChips } from '../resultAddChips';
import { resultAddLog } from '../resultAddLog';
import { JokerBehavior } from './JokerBehavior';

export const runnerBehavior: JokerBehavior = {
  displayName: 'Runner',
  rarity: 'Common',
  onBeforeEvaluate(result, board, joker) {
    if (result.handResult!.containsStraight) {
      const params = getJokerParams(board, joker);
      const value = parseInt(params.value ?? '0', 10) + 10;
      params.value = value.toString();

      resultAddLog(result, joker.toDisplayString(), `Upgrade! (+${value} chips)`);
    }
  },
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
    }
  },
};
