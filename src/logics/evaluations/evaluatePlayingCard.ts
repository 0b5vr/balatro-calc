import { Board } from '../Board';
import { PlayingCard } from '../PlayingCard';
import { resultAddChips } from './resultAddChips';
import { resultAddLog } from './resultAddLog';
import { resultAddMults } from './resultAddMults';
import { resultMultMults } from './resultMultMults';
import { boardProbability } from './boardProbability';
import { jokerBehaviors } from './joker-behaviors/jokerBehaviors';
import { BoardResult } from '../BoardResult';
import { rankToScore } from './rankToScore';

function again(result: BoardResult, playingCard: PlayingCard, why: string) {
  resultAddLog(
    result,
    playingCard.toDisplayString(),
    `Again! (${why})`,
  );
}

function triggerOnce(result: BoardResult, board: Board, playingCard: PlayingCard): void {
  const subject = playingCard.toDisplayString();

  let chips = playingCard.enhancement === 'Stone' ? 50 : rankToScore(playingCard.rank);

  chips += playingCard.extraChips;

  if (playingCard.enhancement === 'Bonus') {
    chips += 30;
  }

  if (playingCard.edition === 'Foil') {
    chips += 50;
  }

  resultAddChips(result, subject, chips);

  if (playingCard.enhancement === 'Mult') {
    resultAddMults(result, subject, 4);
  }

  if (playingCard.enhancement === 'Lucky') {
    if (boardProbability(result, board, 1.0 / 5.0)) {
      resultAddMults(result, subject, 20);
    }

    if (boardProbability(result, board, 1.0 / 15.0)) {
      resultAddLog(result, subject, '$20');
    }
  }

  if (playingCard.edition === 'Holographic') {
    resultAddMults(result, subject, 10);
  }

  if (playingCard.enhancement === 'Glass') {
    resultMultMults(result, subject, 2);
  }

  if (playingCard.edition === 'Polychrome') {
    resultMultMults(result, subject, 1.5);
  }

  if (playingCard.seal === 'GoldSeal') {
    resultAddLog(result, subject, '$3');
  }

  for (const joker of board.jokers) {
    if (joker.name !== '') {
      const behavior = jokerBehaviors[joker.name];
      behavior?.onCardTriggered?.(result, board, joker, playingCard);
    }
  }
}

export function evaluatePlayingCard(result: BoardResult, board: Board, playingCard: PlayingCard): void {
  triggerOnce(result, board, playingCard);

  if (playingCard.seal === 'RedSeal') {
    again(result, playingCard, 'RedSeal');
    triggerOnce(result, board, playingCard);
  }

  for (const joker of board.jokers) {
    if (joker.name !== '') {
      const behavior = jokerBehaviors[joker.name];
      const retrigger = behavior?.shouldRetriggerCard?.(result, board, joker, playingCard);

      if (retrigger) {
        again(result, playingCard, joker.toDisplayString());
        triggerOnce(result, board, playingCard);
      }
    }
  }
}
