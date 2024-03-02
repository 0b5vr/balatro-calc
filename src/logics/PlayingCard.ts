import { arrayMatch } from '../utils/arrayMatch';
import { Edition } from './Edition';
import { Enhancement } from './Enhancement';
import { Rank } from './Rank';
import { Seal } from './Seal';
import { Suit } from './Suit';

export class PlayingCard {
  public readonly id: string;

  public suit: Suit = 's';
  public rank: Rank = 'A';
  public enhancement: '' | Enhancement = '';
  public edition: '' | Edition = '';
  public seal: '' | Seal = '';
  public extraChips: number = 0;

  public selected: boolean = false;
  public debuffed: boolean = false;

  public constructor(rankSuit?: `${Rank}${Suit}`) {
    this.id = crypto.randomUUID();

    if (rankSuit) {
      this.rank = rankSuit[0] as Rank;
      this.suit = rankSuit[1] as Suit;
    }
  }

  public clone(): PlayingCard {
    const newCard = new PlayingCard();

    newCard.suit = this.suit;
    newCard.rank = this.rank;
    newCard.enhancement = this.enhancement;
    newCard.edition = this.edition;
    newCard.seal = this.seal;
    newCard.extraChips = this.extraChips;
    newCard.selected = this.selected;
    newCard.debuffed = this.debuffed;

    return newCard;
  }

  public static fromString(str: string): PlayingCard {
    const arr = str.split(',');

    const rank = arr[0][0] as Rank;
    const suit = arr[0][1] as Suit;

    let enhancement: '' | Enhancement = '';
    let edition: '' | Edition = '';
    let seal: '' | Seal = '';
    let extraChips = 0;
    let selected = false;
    let debuffed = false;

    for (let i = 1; i < arr.length; i ++) {
      const e = arr[i];

      enhancement = arrayMatch(Enhancement, e) ?? enhancement;
      edition = arrayMatch(Edition, e) ?? edition;
      seal = arrayMatch(Seal, e) ?? seal;

      if (e.startsWith('+')) {
        extraChips = parseInt(e.slice(1), 10);
      }

      if (e === 'selected') {
        selected = true;
      }

      if (e === 'debuffed') {
        debuffed = true;
      }
    }

    const newCard = new PlayingCard();

    newCard.rank = rank;
    newCard.suit = suit;
    newCard.enhancement = enhancement;
    newCard.edition = edition;
    newCard.seal = seal;
    newCard.extraChips = extraChips;
    newCard.selected = selected;
    newCard.debuffed = debuffed;

    return newCard;
  }

  public toString(): string {
    let str = `${this.rank}${this.suit}`;

    if (this.enhancement) { str += `,${this.enhancement}`; }
    if (this.edition) { str += `,${this.edition}`; }
    if (this.seal) { str += `,${this.seal}`; }
    if (this.extraChips) { str += `,+${this.extraChips}`; }
    if (this.selected) { str += ',selected'; }
    if (this.debuffed) { str += ',debuffed'; }

    return str;
  }

  public toDisplayString(): string {
    let str = `${this.rank}${this.suit}`;

    if (this.enhancement) {
      str += {
        'Bonus': '🔼',
        'Mult': '🎀',
        'Wild': '🎨',
        'Glass': '🪟',
        'Steel': '🔩',
        'Stone': '🪨',
        'Gold': '💰',
        'Lucky': '🍀',
      }[this.enhancement];
    }

    if (this.edition) {
      str += {
        'Foil': '💿',
        'Holographic': '💎',
        'Polychrome': '🌈',
      }[this.edition];
    }

    if (this.seal) {
      str += {
        'GoldSeal': '🟡',
        'RedSeal': '🔴',
        'BlueSeal': '🔵',
        'PurpleSeal': '🟣',
      }[this.seal];
    }

    if (this.debuffed) {
      str += '❌';
    }

    if (this.extraChips) { str += ` (+${this.extraChips})`; }

    return str;
  }
}
