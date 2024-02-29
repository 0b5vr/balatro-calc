import { Board } from '../../Board';
import { BoardResult } from '../../BoardResult';
import { Joker } from '../../Joker';
import { JokerRarity } from '../../JokerRarity';
import { PlayingCard } from '../../PlayingCard';

export interface JokerBehavior {
  displayName?: string;
  rarity: JokerRarity;
  onBeforeEvaluate?: (result: BoardResult, board: Board, joker: Joker) => void;
  evaluate?: (result: BoardResult, board: Board, joker: Joker) => void;
  onCardTriggered?: (result: BoardResult, board: Board, joker: Joker, scored: PlayingCard) => void;
  onHandCardTriggered?: (result: BoardResult, board: Board, joker: Joker, handCard: PlayingCard) => boolean;
  onJokerTriggered?: (result: BoardResult, board: Board, joker: Joker, triggered: Joker) => void;
  shouldRetriggerCard?: (result: BoardResult, board: Board, joker: Joker, scored: PlayingCard) => boolean;
  shouldRetriggerHandCard?: (result: BoardResult, board: Board, joker: Joker, handCard: PlayingCard) => boolean;
  params?: Record<string, {
    label: string;
    default: string;
    validate?: (value: string) => boolean;
  }>;
}
