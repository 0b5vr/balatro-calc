import { isCardRank } from '../isCardRank';
import { resultAddMults } from '../resultAddMults';
import { JokerBehavior } from './JokerBehavior';

export const shootTheMoonBehavior: JokerBehavior = {
  displayName: 'Shoot the Moon',
  rarity: 'Common',
  onHandCardTriggered(result, board, joker, handCard) {
    if (isCardRank(board, handCard, 'Q')) {
      const subject = `${handCard.toDisplayString()} (${joker.toDisplayString()})`
      resultAddMults(result, subject, 13);
      return true;
    }

    return false;
  },
}
