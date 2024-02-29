import { validateInteger } from '../../validations/validateInteger';
import { isCardFace } from '../isCardFace';
import { resultAddLog } from '../resultAddLog';
import { resultAddMults } from '../resultAddMults';
import { JokerBehavior } from './JokerBehavior';

export const rideTheBusBehavior: JokerBehavior = {
  displayName: 'Ride the Bus',
  rarity: 'Common',
  onBeforeEvaluate(result, board, joker) {
    const hasFaceCard = result.handResult!.scored.some((card) => isCardFace(board, card));

    const value = hasFaceCard
      ? 0
      : parseInt(joker.params.value ?? '0', 10) + 1;
    joker.params.value = value.toString();

    if (hasFaceCard) {
      resultAddLog(result, joker.toDisplayString(), `Reset (+${value} mult)`);
    } else {
      resultAddLog(result, joker.toDisplayString(), `Upgrade! (+${value} mult)`);
    }
  },
  evaluate(result, _board, joker) {
    const value = parseInt(joker.params.value ?? '0', 10);
    resultAddMults(result, joker.toDisplayString(), value);
  },
  params: {
    'value': {
      label: 'Mult',
      default: '0',
      validate: validateInteger,
    }
  }
};
