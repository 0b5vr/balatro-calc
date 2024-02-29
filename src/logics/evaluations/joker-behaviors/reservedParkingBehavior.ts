import { boardProbability } from '../boardProbability';
import { isCardFace } from '../isCardFace';
import { resultAddLog } from '../resultAddLog';
import { JokerBehavior } from './JokerBehavior';

export const reservedParkingBehavior: JokerBehavior = {
  displayName: 'Reserved Parking',
  rarity: 'Uncommon',
  onHandCardTriggered(result, board, joker, handCard) {
    if (isCardFace(board, handCard)) {
      const subject = `${handCard.toDisplayString()} (${joker.toDisplayString()})`

      if (boardProbability(result, board, 1.0 / 2.0)) {
        resultAddLog(result, subject, '$3');
      }

      return true;
    }

    return false;
  },
};
