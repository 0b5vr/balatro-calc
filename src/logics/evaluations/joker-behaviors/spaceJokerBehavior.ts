import { calcBaseChips } from '../../calcBaseChips';
import { boardProbability } from '../boardProbability';
import { resultAddLog } from '../resultAddLog';
import { JokerBehavior } from './JokerBehavior';

export const spaceJokerBehavior: JokerBehavior = {
  displayName: 'Space Joker',
  rarity: 'Uncommon',
  onBeforeEvaluate(result, board, joker) {
    if (boardProbability(result, board, 1.0 / 4.0)) {
      resultAddLog(result, joker.toDisplayString(), `Level Up!`);

      const hand = result.handResult!.hand;
      const handLv = (board.handLevels.get(hand) ?? 1) + 1;
      board.handLevels.set(hand, handLv);

      const [baseChips, baseMults] = calcBaseChips(hand, handLv);
      result.chips = baseChips;
      result.mults = baseMults;

      resultAddLog(result, undefined, `${hand} lvl.${handLv}`);
    }
  },
}
