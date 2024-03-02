import { Board } from '../Board';
import { Joker } from '../Joker';
import { JokerBehavior } from './joker-behaviors/JokerBehavior';
import { jokerBehaviors } from './joker-behaviors/jokerBehaviors';

export const getJokerBehavior = (board: Board, joker: Joker): JokerBehavior | null => {
  if (joker.name === 'Brainstorm') {
    const leftmostJoker = board.jokers[0];
    if (leftmostJoker === joker) {
      return null;
    } else {
      return getJokerBehavior(board, leftmostJoker);
    }
  } else if (joker.name === 'Blueprint') {
    const index = board.jokers.indexOf(joker);
    const nextJoker = board.jokers[index + 1];
    if (nextJoker === joker) {
      return null;
    } else {
      return getJokerBehavior(board, nextJoker);
    }
  }

  if (joker.name === '') {
    return null;
  }

  return jokerBehaviors[joker.name];
};
