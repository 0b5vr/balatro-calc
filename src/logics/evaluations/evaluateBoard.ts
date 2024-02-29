import { Board } from '../Board';
import { BoardResult } from '../BoardResult';
import { calcBaseChips } from '../calcBaseChips';
import { evaluateHand } from './evaluateHand';
import { resultAddLog } from './resultAddLog';
import { evaluateJoker } from './evaluateJoker';
import { evaluatePlayingCard } from './evaluatePlayingCard';
import { evaluateHandCard } from './evaluateHandCard';
import { jokerBehaviors } from './joker-behaviors/jokerBehaviors';

export function evaluateBoard(board: Board): BoardResult {
  const result: BoardResult = {
    board,
    chips: 0,
    mults: 0,
    probability: 1,
    logs: [],
    conditions: [],
  };

  const selectedCards = board.playingCards.filter((card) => card.selected);

  if (selectedCards.length === 0) {
    return result;
  }

  if (selectedCards.length > 5) {
    return result;
  }

  const handResult = result.handResult = evaluateHand(board);
  const { hand, scored } = handResult;

  const handLv = board.handLevels.get(hand) ?? 1;
  const [baseChips, baseMults] = calcBaseChips(hand, handLv);
  result.chips = baseChips;
  result.mults = baseMults;

  resultAddLog(result, undefined, `${hand} lvl.${handLv}`);

  for (const joker of board.jokers) {
    if (joker.name !== '') {
      const behavior = jokerBehaviors[joker.name];
      behavior?.onBeforeEvaluate?.(result, board, joker);
    }
  }

  if (board.isFlint) {
    result.chips = Math.floor(result.chips / 2);
    result.mults = Math.floor(result.mults / 2);

    resultAddLog(result, undefined, 'Halved (The Flint)');
  }

  for (const card of scored) {
    evaluatePlayingCard(result, board, card);
  }

  const handCards = board.playingCards.filter((card) => !card.selected);
  for (const card of handCards) {
    evaluateHandCard(result, board, card);
  }

  for (const joker of board.jokers) {
    evaluateJoker(result, board, joker);
  }

  if (board.isPlasmaDeck) {
    const balanced = Math.floor((result.chips + result.mults) / 2.0);
    result.chips = balanced;
    result.mults = balanced;

    resultAddLog(result, undefined, 'Balanced (Plasma deck)', 'balanced');
  }

  return result;
}