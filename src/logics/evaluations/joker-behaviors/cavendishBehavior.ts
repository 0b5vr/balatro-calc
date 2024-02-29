import { resultMultMults } from '../resultMultMults';
import { JokerBehavior } from './JokerBehavior';

export const cavendishBehavior: JokerBehavior = {
  displayName: 'Cavendish',
  rarity: 'Common',
  evaluate(result, _board, joker) {
    resultMultMults(result, joker.toDisplayString(), 3);
  },
};
