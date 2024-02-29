import { Board } from '../Board';
import { Joker } from '../Joker';
import { resultAddChips } from './resultAddChips';
import { resultAddMults } from './resultAddMults';
import { resultMultMults } from './resultMultMults';
import { jokerBehaviors } from './joker-behaviors/jokerBehaviors';
import { BoardResult } from '../BoardResult';

export function evaluateJoker(result: BoardResult, board: Board, joker: Joker): void {
  if (joker.name !== '') {
    const behavior = jokerBehaviors[joker.name];
    behavior?.evaluate?.(result, board, joker);
  }

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
    if (otherJoker.name !== '') {
      const behavior = jokerBehaviors[otherJoker.name];
      behavior?.onJokerTriggered?.(result, board, otherJoker, joker);
    }
  }
}
