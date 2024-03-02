import { Board } from '../Board';
import { PlayingCard } from '../PlayingCard';
import { resultAddLog } from './resultAddLog';
import { resultMultMults } from './resultMultMults';
import { BoardResult } from '../BoardResult';
import { getJokerBehavior } from './getJokerBehavior';

function again(result: BoardResult, playingCard: PlayingCard, why: string) {
  resultAddLog(
    result,
    playingCard.toDisplayString() + ' (Hand)',
    `Again! (${why})`,
    'retrigger',
  );
}

function triggerOnce(result: BoardResult, board: Board, playingCard: PlayingCard): boolean {
  let happened = false;

  const subject = playingCard.toDisplayString() + ' (Hand)';

  if (playingCard.enhancement === 'Steel') {
    resultMultMults(result, subject, 1.5);
    happened = true;
  }

  for (const joker of board.jokers) {
    const behavior = getJokerBehavior(board, joker);
    happened = behavior?.onHandCardTriggered?.(result, board, joker, playingCard) || happened;
  }

  return happened;
}

export function evaluateHandCard(result: BoardResult, board: Board, playingCard: PlayingCard): void {
  if (playingCard.debuffed) {
    resultAddLog(result, playingCard.toDisplayString(), 'Debuffed');
    return;
  }

  const happened = triggerOnce(result, board, playingCard);

  if (happened) {
    if (playingCard.seal === 'RedSeal') {
      again(result, playingCard, 'RedSeal');
      triggerOnce(result, board, playingCard);
    }

    for (const joker of board.jokers) {
      const behavior = getJokerBehavior(board, joker);
      const retrigger = behavior?.shouldRetriggerHandCard?.(result, board, joker, playingCard);

      if (retrigger) {
        again(result, playingCard, joker.toDisplayString());
        triggerOnce(result, board, playingCard);
      }
    }
  }
}
