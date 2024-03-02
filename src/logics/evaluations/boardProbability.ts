import { Board } from '../Board';
import { BoardResult } from '../BoardResult';

export function boardProbability(
  result: BoardResult,
  board: Board,
  probability: number,
): boolean {
  if (board.hasJoker('OopsAll6s')) {
    probability = Math.min(1, 2.0 * probability);
  }

  if (board.probabilityPreference === 'best') {
    result.probability *= probability;
    return true;
  } else if (board.probabilityPreference === 'worst') {
    result.probability *= 1 - probability;
    return false;
  } else {
    return Math.random() < probability;
  }
}
