import { Suit } from '../../Suit';
import { isCardSuit } from '../isCardSuit';
import { resultMultMults } from '../resultMultMults';
import { JokerBehavior } from './JokerBehavior';

export const seeingDoubleBehavior: JokerBehavior = {
  displayName: 'Seeing Double',
  rarity: 'Uncommon',
  evaluate(result, board, joker) {
    const foundSuits = new Set<Suit>();
    let wilds = 0;

    for (const card of result.handResult!.scored) {
      if (card.enhancement === 'Wild') {
        wilds ++;
      } else {
        for (const suit of Suit) {
          if (isCardSuit(board, card, suit)) {
            foundSuits.add(suit);
            break;
          }
        }
      }
    }

    if (
      ((foundSuits.has('c') || wilds >= 1) && foundSuits.size + wilds >= 2)
    ) {
      resultMultMults(result, joker.toDisplayString(), 2);
    }
  },
};
