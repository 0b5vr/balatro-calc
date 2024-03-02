import { validateInteger } from '../../validations/validateInteger';
import { getJokerParams } from '../getJokerParams';
import { resultAddChips } from '../resultAddChips';
import { resultAddLog } from '../resultAddLog';
import { JokerBehavior } from './JokerBehavior';

export const squareJokerBehavior: JokerBehavior = {
  displayName: 'Square Joker',
  rarity: 'Common',
  onBeforeEvaluate(result, board, joker) {
    const selectedCards = result.board.playingCards.filter((card) => card.selected);
    if (selectedCards.length === 4) {
      const params = getJokerParams(board, joker);
      const value = parseInt(params.value ?? '0', 10) + 4;
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
