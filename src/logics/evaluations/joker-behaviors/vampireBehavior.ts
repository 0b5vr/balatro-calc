import { validateNumber } from '../../validations/validateNumber';
import { resultAddLog } from '../resultAddLog';
import { resultMultMults } from '../resultMultMults';
import { JokerBehavior } from './JokerBehavior';

export const vampireBehavior: JokerBehavior = {
  displayName: 'Vampire',
  rarity: 'Uncommon',
  onBeforeEvaluate(result, board, joker) {
    let value = parseFloat(joker.params.value ?? '1');

    const selectedCards = board.playingCards.filter((card) => card.selected);
    for (const card of selectedCards) {
      if (card.enhancement !== '') {
        const subject = `${joker.toDisplayString()} (${card.toDisplayString()})`;
        card.enhancement = '';
        value += 0.2;
        resultAddLog(result, subject, `Upgrade! {x${value.toFixed(1)} mult}`);
      }
    }

    joker.params.value = value.toFixed(1);
  },
  evaluate(result, _board, joker) {
    const value = parseFloat(joker.params.value ?? '1');
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
