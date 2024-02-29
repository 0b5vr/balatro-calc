import { isCardFace } from '../isCardFace';
import { resultMultMults } from '../resultMultMults';
import { JokerBehavior } from './JokerBehavior';

export const photographBehavior: JokerBehavior = {
  displayName: 'Photograph',
  rarity: 'Common',
  onCardTriggered(result, board, joker, scored) {
    const firstPlayedFace = result.handResult?.scored.find((card) => isCardFace(board, card));
    if (scored === firstPlayedFace) {
      const subject = `${scored.toDisplayString()} (${joker.toDisplayString()})`;
      resultMultMults(result, subject, 2);
    }
  },
};
