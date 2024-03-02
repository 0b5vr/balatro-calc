import { Board } from '../Board';
import { Joker } from '../Joker';

export const getJokerParams = (board: Board, joker: Joker): Record<string, string> => {
  if (joker.name === 'Brainstorm') {
    const leftmostJoker = board.jokers[0];
    if (leftmostJoker === joker) {
      return {};
    } else {
      return getJokerParams(board, leftmostJoker);
    }
  } else if (joker.name === 'Blueprint') {
    const index = board.jokers.indexOf(joker);
    const nextJoker = board.jokers[index + 1];
    if (nextJoker === joker) {
      return {};
    } else {
      return getJokerParams(board, nextJoker);
    }
  }

  if (joker.name === '') {
    return {};
  }

  return joker.params;
}
