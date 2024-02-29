import { resultAddMults } from '../resultAddMults';
import { JokerBehavior } from './JokerBehavior';

export const abstractJokerBehavior: JokerBehavior = {
  displayName: 'Abstract Joker',
  rarity: 'Common',
  evaluate(result, board, joker) {
    const jokerCount = board.jokers.filter((joker) => joker.name !== '').length;
    resultAddMults(result, joker.toDisplayString(), 3 * jokerCount);
  },
};
