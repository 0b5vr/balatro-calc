import { isCardRank } from '../isCardRank';
import { resultAddLog } from '../resultAddLog';
import { JokerBehavior } from './JokerBehavior';

export const superpositionBehavior: JokerBehavior = {
  displayName: 'Superposition',
  rarity: 'Common',
  onBeforeEvaluate(result, board, joker) {
    const containsStraight = result.handResult!.containsStraight;
    const containsAce = result.handResult!.scored.some((card) => isCardRank(board, card, 'A'));

    if (containsStraight && containsAce) {
      resultAddLog(result, joker.toDisplayString(), '+1 Tarot');
    }
  },
}
