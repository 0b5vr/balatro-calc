import { validateInteger } from '../../validations/validateInteger';
import { resultAddChips } from '../resultAddChips';
import { resultAddLog } from '../resultAddLog';
import { JokerBehavior } from './JokerBehavior';

export const squareJokerBehavior: JokerBehavior = {
  displayName: 'Square Joker',
  rarity: 'Common',
  onBeforeEvaluate(result, _board, joker) {
    const selectedCards = result.board.playingCards.filter((card) => card.selected);
    if (selectedCards.length === 4) {
      const value = parseInt(joker.params.value ?? '0', 10) + 4;
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
