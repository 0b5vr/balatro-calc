import { isCardFace } from '../isCardFace';
import { resultAddLog } from '../resultAddLog';
import { JokerBehavior } from './JokerBehavior';

export const midasMaskBehavior: JokerBehavior = {
  displayName: 'Midas Mask',
  rarity: 'Uncommon',
  onBeforeEvaluate(result, board, joker) {
    const selectedCards = board.playingCards.filter((card) => card.selected);
    for (const card of selectedCards) {
      if (isCardFace(board, card)) {
        const subject = `${card.toDisplayString()} (${joker.toDisplayString()})`;
        card.enhancement = 'Gold';
        resultAddLog(result, subject, 'Gold');
      }
    }
  },
};
