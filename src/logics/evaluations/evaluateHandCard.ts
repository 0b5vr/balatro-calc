import { Board } from '../Board';
import { PlayingCard } from '../PlayingCard';
import { resultAddLog } from './resultAddLog';
import { resultMultMults } from './resultMultMults';
import { jokerBehaviors } from './joker-behaviors/jokerBehaviors';
import { BoardResult } from '../BoardResult';

function again(result: BoardResult, playingCard: PlayingCard, why: string) {
  resultAddLog(
    result,
    playingCard.toDisplayString() + ' (Hand)',
    `Again! (${why})`,
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
    if (joker.name !== '') {
      const behavior = jokerBehaviors[joker.name];
      happened = behavior?.onHandCardTriggered?.(result, board, joker, playingCard) || happened;
    }
  }

  return happened;
}

export function evaluateHandCard(result: BoardResult, board: Board, playingCard: PlayingCard): void {
  const happened = triggerOnce(result, board, playingCard);

  if (happened) {
    if (playingCard.seal === 'RedSeal') {
      again(result, playingCard, 'RedSeal');
      triggerOnce(result, board, playingCard);
    }

    for (const joker of board.jokers) {
      if (joker.name !== '') {
        const behavior = jokerBehaviors[joker.name];
        const retrigger = behavior?.shouldRetriggerHandCard?.(result, board, joker, playingCard);

        if (retrigger) {
          again(result, playingCard, joker.toDisplayString());
          triggerOnce(result, board, playingCard);
        }
      }
    }
  }
}