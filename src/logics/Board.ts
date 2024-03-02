import { Hand } from './Hand';
import { Joker } from './Joker';
import { PlayingCard } from './PlayingCard';

export class Board {
  public playingCards: PlayingCard[] = [];

  public jokers: Joker[] = [];

  public handLevels: Map<Hand, number> = new Map();

  public isPlasmaDeck: boolean = false;
  public isFlint: boolean = false;
  public probabilityPreference: 'best' | 'worst' | 'roll' = 'best';

  public clone(): Board {
    const board = new Board();

    board.playingCards = this.playingCards.map((card) => card.clone());

    board.jokers = this.jokers.map((joker) => joker.clone());

    board.handLevels = new Map(this.handLevels);

    board.isPlasmaDeck = this.isPlasmaDeck;
    board.isFlint = this.isFlint;
    board.probabilityPreference = this.probabilityPreference;

    return board;
  }

  public hasJoker(name: string): boolean {
    return this.jokers.some((j) => j.name === name);
  }
}
