import { resultAddMults } from '../resultAddMults';
import { JokerBehavior } from './JokerBehavior';

export const grosMichelBehavior: JokerBehavior = {
  displayName: 'Gros Michel',
  rarity: 'Common',
  evaluate(result, _board, joker) {
    resultAddMults(result, joker.toDisplayString(), 15);
  },
};
