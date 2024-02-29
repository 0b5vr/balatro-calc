import { JokerBehavior } from './JokerBehavior';
import { jokerBehaviors } from './jokerBehaviors';
import { Board } from '../../Board';
import { Joker } from '../../Joker';

function getLeftmostJokerStuff(board: Board, joker: Joker): {
  params: Record<string, string>,
  behavior: JokerBehavior,
} | null {
  const leftmostJoker = board.jokers[0];
  if (leftmostJoker === joker) {
    return null;
  }

  if (leftmostJoker?.name === '') {
    return null;
  }

  return {
    params: leftmostJoker.params,
    behavior: jokerBehaviors[leftmostJoker.name],
  };
}

export const brainstormBehavior: JokerBehavior = {
  rarity: 'Rare',
  evaluate(result, board, joker) {
    const stuff = getLeftmostJokerStuff(board, joker);
    if (stuff == null) { return; }

    const { behavior, params } = stuff;
    const cloned = joker.clone();
    cloned.params = params;
    behavior?.evaluate?.(result, board, cloned);
  },
  onCardTriggered(result, board, joker, scored) {
    const stuff = getLeftmostJokerStuff(board, joker);
    if (stuff == null) { return; }

    const { behavior, params } = stuff;
    const cloned = joker.clone();
    cloned.params = params;
    behavior?.onCardTriggered?.(result, board, cloned, scored);
  },
  onHandCardTriggered(result, board, joker, handCard) {
    const stuff = getLeftmostJokerStuff(board, joker);
    if (stuff == null) { return false; }

    const { behavior, params } = stuff;
    const cloned = joker.clone();
    cloned.params = params;
    return behavior?.onHandCardTriggered?.(result, board, cloned, handCard) || false;
  },
  shouldRetriggerCard(result, board, joker, scored) {
    const stuff = getLeftmostJokerStuff(board, joker);
    if (stuff == null) { return false; }

    const { behavior, params } = stuff;
    const cloned = joker.clone();
    cloned.params = params;
    return behavior?.shouldRetriggerCard?.(result, board, cloned, scored) || false;
  },
}
