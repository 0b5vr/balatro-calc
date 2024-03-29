import { Rank } from '../../Rank';
import { Suit } from '../../Suit';
import { validateRankSuit } from '../../validations/validateRankSuit';
import { getJokerParams } from '../getJokerParams';
import { isCardRank } from '../isCardRank';
import { isCardSuit } from '../isCardSuit';
import { resultMultMults } from '../resultMultMults';
import { JokerBehavior } from './JokerBehavior';

export const theIdolBehavior: JokerBehavior = {
  displayName: 'The Idol',
  rarity: 'Uncommon',
  onCardTriggered(result, board, joker, scored) {
    const params = getJokerParams(board, joker);
    const targetRank = (params.card?.[0] ?? 'A') as Rank;
    const targetSuit = (params.card?.[1] ?? 's') as Suit;

    if (isCardRank(board, scored, targetRank) && isCardSuit(board, scored, targetSuit)) {
      const subject = `${scored.toDisplayString()} (${joker.toDisplayString()})`;
      resultMultMults(result, subject, 2);
    }
  },
  params: {
    'card': {
      label: 'Card',
      default: 'As',
      validate: validateRankSuit,
    }
  },
}
