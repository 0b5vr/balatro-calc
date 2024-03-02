import { Board } from '../Board';
import { Joker } from '../Joker';
import { resultAddChips } from './resultAddChips';
import { resultAddMults } from './resultAddMults';
import { resultMultMults } from './resultMultMults';
import { BoardResult } from '../BoardResult';
import { getJokerBehavior } from './getJokerBehavior';

export function evaluateJoker(result: BoardResult, board: Board, joker: Joker): void {
  const behavior = getJokerBehavior(board, joker);
  behavior?.evaluate?.(result, board, joker);

  if (joker.edition === 'Foil') {
    resultAddChips(result, joker.toDisplayString(), 50);
  }

  if (joker.edition === 'Holographic') {
    resultAddMults(result, joker.toDisplayString(), 10);
  }

  if (joker.edition === 'Polychrome') {
    resultMultMults(result, joker.toDisplayString(), 1.5);
  }

  for (const otherJoker of board.jokers) {
    const behavior = getJokerBehavior(board, joker);
    behavior?.onJokerTriggered?.(result, board, otherJoker, joker);
  }
}
