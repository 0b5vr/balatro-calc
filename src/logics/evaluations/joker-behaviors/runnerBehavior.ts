import { validateInteger } from '../../validations/validateInteger';
import { resultAddChips } from '../resultAddChips';
import { resultAddLog } from '../resultAddLog';
import { JokerBehavior } from './JokerBehavior';

export const runnerBehavior: JokerBehavior = {
  displayName: 'Runner',
  rarity: 'Common',
  onBeforeEvaluate(result, _board, joker) {
    if (result.handResult!.containsStraight) {
      const value = parseInt(joker.params.value ?? '0', 10) + 10;
      joker.params.value = value.toString();

      resultAddLog(result, joker.toDisplayString(), `Upgrade! (+${value} chips)`);
    }
  },
  evaluate(result, _board, joker) {
    const value = parseInt(joker.params.value ?? '0', 10);
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
