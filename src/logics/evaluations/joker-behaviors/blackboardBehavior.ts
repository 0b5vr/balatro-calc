import { isCardSuit } from '../isCardSuit';
import { resultMultMults } from '../resultMultMults';
import { JokerBehavior } from './JokerBehavior';

export const blackboardBehavior: JokerBehavior = {
  displayName: 'Blackboard',
  rarity: 'Uncommon',
  evaluate(result, board, joker) {
    const handCards = board.playingCards.filter((card) => !card.selected);
    const isAllBlack = handCards.every((card) => (
      isCardSuit(board, card, 's') || isCardSuit(board, card, 'c')
    ));

    if (isAllBlack) {
      resultMultMults(result, joker.toDisplayString(), 3);
    }
  },
};
