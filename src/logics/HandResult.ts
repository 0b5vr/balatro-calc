import { Hand } from './Hand';
import { PlayingCard } from './PlayingCard';

export interface HandResult {
  hand: Hand;
  scored: PlayingCard[];

  containsFlush: boolean;
  containsStraight: boolean;
  containsFourOfAKind: boolean;
  containsThreeOfAKind: boolean;
  containsPair: boolean;
}
