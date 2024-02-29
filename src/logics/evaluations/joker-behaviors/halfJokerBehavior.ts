import { resultAddMults } from '../resultAddMults';
import { JokerBehavior } from './JokerBehavior';

export const halfJokerBehavior: JokerBehavior = {
  displayName: 'Half Joker',
  rarity: 'Common',
  evaluate(result, board, joker) {
    const selectedCards = board.playingCards.filter((card) => card.selected);
    if (selectedCards.length <= 3) {
      resultAddMults(result, joker.toDisplayString(), 20);
    }
  },
};
