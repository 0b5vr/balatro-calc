import { resultAddMults } from '../resultAddMults';
import { JokerBehavior } from './JokerBehavior';

export const tutorialJokerBehavior: JokerBehavior = {
  displayName: 'Joker',
  rarity: 'Common',
  evaluate: (result, _board, joker) => {
    resultAddMults(result, joker.toDisplayString(), 4);
  },
}
