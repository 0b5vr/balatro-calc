import { JokerBehavior } from './JokerBehavior';
import { jokerBehaviors } from './jokerBehaviors';
import { Board } from '../../Board';
import { Joker } from '../../Joker';

function getNextJokerBehavior(board: Board, joker: Joker): JokerBehavior | null {
  const index = board.jokers.indexOf(joker);
  const nextJoker = board.jokers[index + 1];

  if (nextJoker?.name !== '') {
    return jokerBehaviors[nextJoker.name];
  }

  return null;
}

export const blueprintBehavior: JokerBehavior = {
  rarity: 'Rare',
  evaluate(result, board, joker) {
    const behavior = getNextJokerBehavior(board, joker);
    behavior?.evaluate?.(result, board, joker);
  },
  onCardTriggered(result, board, joker, scored) {
    const behavior = getNextJokerBehavior(board, joker);
    behavior?.onCardTriggered?.(result, board, joker, scored);
  },
  onHandCardTriggered(result, board, joker, handCard) {
    const behavior = getNextJokerBehavior(board, joker);
    return behavior?.onHandCardTriggered?.(result, board, joker, handCard) || false;
  },
  shouldRetriggerCard(result, board, joker, scored) {
    const behavior = getNextJokerBehavior(board, joker);
    return behavior?.shouldRetriggerCard?.(result, board, joker, scored) || false;
  },
}
