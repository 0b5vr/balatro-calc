import { Edition } from './Edition';
import { JokerName } from './JokerName';
import { jokerBehaviors } from './evaluations/joker-behaviors/jokerBehaviors';

export class Joker {
  public readonly id: string;

  public name: '' | JokerName = '';
  public edition: '' | Edition = '';
  public params: Record<string, string> = {};

  /** for blueprint and brainstorm */
  public displayNameOverride: string | null = null;

  constructor(name?: '' | JokerName) {
    this.id = crypto.randomUUID();

    this.name = name ?? '';
  }

  public clone(): Joker {
    const joker = new Joker(this.name);

    joker.edition = this.edition;
    joker.params = structuredClone(this.params);

    return joker;
  }

  public static fromString(str: string): Joker {
    const arr = str.split(',');

    const name = arr[0] as ('' | JokerName);

    let edition: '' | Edition = '';

    for (let i = 1; i < arr.length; i++) {
      const e = arr[i];

      edition = e as Edition;
    }

    const joker = new Joker(name);

    joker.edition = edition;

    return joker;
  }

  public toString(): string {
    let str = `${this.name}`;

    if (this.edition) { str += `,${this.edition}`; }

    for (const key in this.params) {
      str += `,${key}:${this.params[key]}`;
    }

    return str;
  }

  public toDisplayString(): string {
    if (this.name === '') { return ''; }

    const name = this.displayNameOverride ?? jokerBehaviors[this.name]?.displayName ?? this.name;
    let str = name;

    if (this.edition) {
      str += {
        'Foil': '💿',
        'Holographic': '💎',
        'Polychrome': '🌈',
      }[this.edition];
    }

    return str;
  }
}
