import { resultAddMults } from '../resultAddMults';
import { JokerBehavior } from './JokerBehavior';

export const misprintBehavior: JokerBehavior = {
  displayName: 'Misprint',
  rarity: 'Common',
  evaluate(result, _board, joker) {
    const dice = Math.floor(Math.random() * 24);
    resultAddMults(result, joker.toDisplayString(), dice);
  },
};
