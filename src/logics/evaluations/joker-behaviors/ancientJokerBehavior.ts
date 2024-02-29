import { Suit } from '../../Suit';
import { validateSuit } from '../../validations/validateSuit';
import { isCardSuit } from '../isCardSuit';
import { resultMultMults } from '../resultMultMults';
import { JokerBehavior } from './JokerBehavior';

export const ancientJokerBehavior: JokerBehavior = {
  displayName: 'Ancient Joker',
  rarity: 'Rare',
  onCardTriggered(result, board, joker, scored) {
    const suit = (joker.params['suit'] ?? 's') as Suit;
    if (isCardSuit(board, scored, suit)) {
      const subject = `${scored.toDisplayString()} (${joker.toDisplayString()})`;
      resultMultMults(result, subject, 1.5);
    }
  },
  params: {
    'suit': {
      label: 'Suit',
      default: 's',
      validate: (value) => validateSuit(value),
    }
  }
};
