import { resultMultMults } from '../resultMultMults';
import { JokerBehavior } from './JokerBehavior';

export const jokerStencilBehavior: JokerBehavior = {
  rarity: 'Uncommon',
  evaluate(result, board, joker) {
    const mult = board.jokers.filter((joker) => (
      joker.name === '' ||
      joker.name === 'JokerStencil'
    )).length;
    resultMultMults(result, joker.toDisplayString(), mult);
  },
}
