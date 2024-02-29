import { rankToScore } from '../rankToScore';
import { resultAddMults } from '../resultAddMults';
import { JokerBehavior } from './JokerBehavior';

export const raisedFistBehavior: JokerBehavior = {
  displayName: 'Raised Fist',
  rarity: 'Common',
  onHandCardTriggered(result, board, joker, handCard) {
    const handCards = board.playingCards.filter((card) => !card.selected);
    handCards.sort((a, b) => rankToScore(b.rank) - rankToScore(a.rank));
    const lowestCard = handCards[handCards.length - 1];

    if (lowestCard !== handCard) {
      return false;
    }

    resultAddMults(result, joker.toDisplayString(), 2 * rankToScore(lowestCard.rank));
    return true;
  },
};
