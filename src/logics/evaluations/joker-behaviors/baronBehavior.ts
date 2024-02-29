import { isCardRank } from '../isCardRank';
import { resultMultMults } from '../resultMultMults';
import { JokerBehavior } from './JokerBehavior';

export const baronBehavior: JokerBehavior = {
  displayName: 'Baron',
  rarity: 'Rare',
  onHandCardTriggered(result, board, joker, handCard) {
    if (isCardRank(board, handCard, 'K')) {
      const subject = `${handCard.toDisplayString()} (${joker.toDisplayString()})`
      resultMultMults(result, subject, 1.5);
      return true;
    }

    return false;
  },
}
