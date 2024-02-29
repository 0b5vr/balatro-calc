import { isCardFace } from '../isCardFace';
import { JokerBehavior } from './JokerBehavior';

export const sockAndBuskinBehavior: JokerBehavior = {
  displayName: 'Sock and Buskin',
  rarity: 'Uncommon',
  shouldRetriggerCard(_result, board, _joker, scored) {
    return isCardFace(board, scored);
  },
}
