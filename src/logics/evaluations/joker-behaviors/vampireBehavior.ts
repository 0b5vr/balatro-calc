import { validateNumber } from '../../validations/validateNumber';
import { getJokerParams } from '../getJokerParams';
import { resultAddLog } from '../resultAddLog';
import { resultMultMults } from '../resultMultMults';
import { JokerBehavior } from './JokerBehavior';

export const vampireBehavior: JokerBehavior = {
  displayName: 'Vampire',
  rarity: 'Uncommon',
  onBeforeEvaluate(result, board, joker) {
    const params = getJokerParams(board, joker);
    let value = parseFloat(params.value ?? '1');

    const selectedCards = board.playingCards.filter((card) => card.selected);
    for (const card of selectedCards) {
      if (card.enhancement !== '') {
        const subject = `${joker.toDisplayString()} (${card.toDisplayString()})`;
        card.enhancement = '';
        value += 0.2;
        resultAddLog(result, subject, `Upgrade! {x${value.toFixed(1)} mult}`);
      }
    }

    params.value = value.toFixed(1);
  },
  evaluate(result, board, joker) {
    const params = getJokerParams(board, joker);
    const value = parseFloat(params.value ?? '1');
    resultMultMults(result, joker.toDisplayString(), value);
  },
  params: {
    'value': {
      label: 'Mult (X)',
      default: '1',
      validate: validateNumber,
    }
  },
};
