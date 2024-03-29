import { validateInteger } from '../../validations/validateInteger';
import { getJokerParams } from '../getJokerParams';
import { isCardRank } from '../isCardRank';
import { resultAddChips } from '../resultAddChips';
import { resultAddLog } from '../resultAddLog';
import { JokerBehavior } from './JokerBehavior';

export const weeJokerBehavior: JokerBehavior = {
  displayName: 'Wee Joker',
  rarity: 'Rare',
  onBeforeEvaluate(result, board, joker) {
    const params = getJokerParams(board, joker);
    let value = parseInt(params.value ?? '0', 10);

    for (const card of result.handResult!.scored) {
      if (isCardRank(board, card, '2')) {
        value += 8;

        const subject = `${joker.toDisplayString()} (${card.toDisplayString()})`;
        resultAddLog(result, subject, `Upgrade! (+${value} chips)`);
      }
    }

    params.value = value.toString();
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
