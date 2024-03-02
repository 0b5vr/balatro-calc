import { resultAddMults } from '../resultAddMults';
import { JokerBehavior } from './JokerBehavior';

export const misprintBehavior: JokerBehavior = {
  displayName: 'Misprint',
  rarity: 'Common',
  evaluate(result, board, joker) {
    let dice: number;

    if (board.probabilityPreference === 'best') {
      dice = 23;
      result.probability *= 1.0 / 24.0;
    } else if (board.probabilityPreference === 'worst') {
      dice = 0;
      result.probability *= 1.0 / 24.0;
    } else {
      dice = Math.floor(Math.random() * 24);
    }

    resultAddMults(result, joker.toDisplayString(), dice);
  },
};
