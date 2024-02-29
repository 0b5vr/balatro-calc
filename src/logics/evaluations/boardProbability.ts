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

  result.probability *= probability;
  return true;
}
