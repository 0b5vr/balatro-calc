import { resultAddLog } from '../resultAddLog';
import { JokerBehavior } from './JokerBehavior';

export const goldenTicketBehavior: JokerBehavior = {
  displayName: 'Golden Ticket',
  rarity: 'Common',
  onCardTriggered(result, _board, joker, scored) {
    if (scored.enhancement === 'Gold') {
      const subject = `${scored.toDisplayString()} (${joker.toDisplayString()})`;
      resultAddLog(result, subject, '$3');
    }
  },
};
