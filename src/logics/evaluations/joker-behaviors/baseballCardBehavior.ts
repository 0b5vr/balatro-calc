import { resultMultMults } from '../resultMultMults';
import { JokerBehavior } from './JokerBehavior';
import { jokerBehaviors } from './jokerBehaviors';

export const baseballCardBehavior: JokerBehavior = {
  displayName: 'Baseball Card',
  rarity: 'Common',
  onJokerTriggered(result, _board, joker, triggered) {
    if (triggered.name === '') {
      return;
    }

    const triggeredBehavior = jokerBehaviors[triggered.name];
    if (triggeredBehavior.rarity === 'Uncommon') {
      const subject = `${triggered.toDisplayString()} (${joker.toDisplayString()})`;
      resultMultMults(result, subject, 1.5);
    }
  }
}
