import { Suit } from '../../Suit';
import { isCardSuit } from '../isCardSuit';
import { resultAddMults } from '../resultAddMults';
import { JokerBehavior } from './JokerBehavior';

export function createSuitJokerBehavior(displayName: string, suit: Suit): JokerBehavior {
  return {
    displayName,
    rarity: 'Common',
    onCardTriggered(result, board, joker, scored) {
      if (isCardSuit(board, scored, suit)) {
        resultAddMults(result, `${scored.toDisplayString()} (${joker.toDisplayString()})`, 4);
      }
    },
  };
}
