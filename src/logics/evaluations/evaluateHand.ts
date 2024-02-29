import { MapOfSet } from '@0b5vr/experimental';
import { PlayingCard } from '../PlayingCard';
import { Rank } from '../Rank';
import { Suit } from '../Suit';
import { Board } from '../Board';
import { HandResult } from '../HandResult';

export function evaluateHand(board: Board): HandResult {
  const selectedCards = board.playingCards.filter((card) => card.selected);

  const cardsByRank = new MapOfSet<Rank, PlayingCard>();
  const cardsBySuit = new MapOfSet<Suit, PlayingCard>();
  const stoneCards = new Set<PlayingCard>();

  const splash = board.hasJoker('Splash');

  for (const card of selectedCards) {
    if (card.enhancement === 'Stone') {
      stoneCards.add(card);
      continue;
    }

    cardsByRank.add(card.rank, card);

    if (card.enhancement === 'Wild') {
      for (const suit of Suit) {
        cardsBySuit.add(suit, card);
      }
    } else {
      cardsBySuit.add(card.suit, card);
    }
  }

  const fingers = board.hasJoker('FourFingers')
    ? 4
    : 5;

  // pairs
  const fives: Rank[] = [];
  const fours: Rank[] = [];
  const threes: Rank[] = [];
  const twos: Rank[] = [];

  for (const rank of Rank) {
    const cards = cardsByRank.get(rank);

    if (cards.size === 5) {
      fives.push(rank);
    } else if (cards.size === 4) {
      fours.push(rank);
    } else if (cards.size === 3) {
      threes.push(rank);
    } else if (cards.size === 2) {
      twos.push(rank);
    }
  }

  const isFiveOfAKind = fives.length === 1;
  const containsFourOfAKind = isFiveOfAKind || fours.length === 1;
  const isFullHouse = threes.length === 1 && twos.length === 1;
  const containsThreeOfAKind = containsFourOfAKind || threes.length === 1;
  const isTwoPair = twos.length === 2;
  const containsPair = containsThreeOfAKind || twos.length >= 1;

  const containsProps = {
    containsFourOfAKind,
    containsThreeOfAKind,
    containsPair,
  };

  // flush
  let flushSuit: Suit | '' = '';
  for (const suit of Suit) {
    if (cardsBySuit.get(suit).size >= fingers) {
      flushSuit = suit;
      break;
    }
  }

  if (isFiveOfAKind && flushSuit !== '') {
    return {
      hand: 'FlushFive',
      scored: selectedCards,
      containsFlush: true,
      containsStraight: false,
      ...containsProps,
    };
  }

  if (isFullHouse && flushSuit !== '') {
    return {
      hand: 'FlushHouse',
      scored: selectedCards,
      containsFlush: true,
      containsStraight: false,
      ...containsProps,
    };
  }

  if (isFiveOfAKind) {
    return {
      hand: 'FiveOfAKind',
      scored: selectedCards,
      containsFlush: false,
      containsStraight: false,
      ...containsProps,
    };
  }

  // straight
  const straightScored = new Set<PlayingCard>();
  const hasShortcut = board.hasJoker('Shortcut');
  let isStraight = false;

  {
    let currentStreak = 0;
    let shortcutCount = 0;

    for (const rank of Rank) {
      if (cardsByRank.get(rank).size > 0) {
        for (const card of cardsByRank.get(rank)) {
          straightScored.add(card);
        }

        currentStreak ++;
        shortcutCount = 0;

        if (currentStreak === fingers) {
          isStraight = true;
        }
      } else if (hasShortcut && shortcutCount < 1) {
        shortcutCount ++;
      } else if (isStraight) {
        break;
      } else {
        straightScored.clear();
        currentStreak = 0;
        shortcutCount = 0;
      }
    }
  }

  if (isStraight && flushSuit !== '') {
    const flushSet = cardsBySuit.get(flushSuit as Suit);
    const scored = selectedCards.filter((card) => (
      straightScored.has(card) ||
      flushSet.has(card) ||
      stoneCards.has(card) ||
      splash
    ));
    return {
      hand: 'StraightFlush',
      scored,
      containsFlush: true,
      containsStraight: true,
      ...containsProps,
    };
  }

  if (containsFourOfAKind) {
    const fourSet = cardsByRank.get(fours[0]);
    const scored = selectedCards.filter((card) => (
      fourSet.has(card) ||
      stoneCards.has(card) ||
      splash
    ));
    return {
      hand: 'FourOfAKind',
      scored,
      containsFlush: false,
      containsStraight: false,
      ...containsProps,
    };
  }

  if (flushSuit !== '') {
    const flushSet = cardsBySuit.get(flushSuit as Suit);
    const scored = selectedCards.filter((card) => (
      flushSet.has(card) ||
      stoneCards.has(card) ||
      splash
    ));
    return {
      hand: 'Flush',
      scored,
      containsFlush: true,
      containsStraight: false,
      ...containsProps,
    };
  }

  if (isStraight) {
    const scored = selectedCards.filter((card) => (
      straightScored.has(card) ||
      stoneCards.has(card) ||
      splash
    ));
    return {
      hand: 'Straight',
      scored,
      containsFlush: false,
      containsStraight: true,
      ...containsProps,
    };
  }

  if (containsThreeOfAKind) {
    const threeSet = cardsByRank.get(threes[0]);
    const scored = selectedCards.filter((card) => (
      threeSet.has(card) ||
      stoneCards.has(card) ||
      splash
    ));
    return {
      hand: 'ThreeOfAKind',
      scored,
      containsFlush: false,
      containsStraight: false,
      ...containsProps,
    };
  }

  if (isTwoPair) {
    const pairSet1 = cardsByRank.get(twos[0]);
    const pairSet2 = cardsByRank.get(twos[1]);
    const scored = selectedCards.filter((card) => (
      pairSet1.has(card) ||
      pairSet2.has(card) ||
      stoneCards.has(card) ||
      splash
    ));
    return {
      hand: 'TwoPairs',
      scored,
      containsFlush: false,
      containsStraight: false,
      ...containsProps,
    };
  }

  if (containsPair) {
    const pairSet = cardsByRank.get(twos[0]);
    const scored = selectedCards.filter((card) => (
      pairSet.has(card) ||
      stoneCards.has(card) ||
      splash
    ));
    return {
      hand: 'OnePair',
      scored,
      containsFlush: false,
      containsStraight: false,
      ...containsProps,
    };
  }

  // high card
  for (const rank of Rank) {
    const cards = cardsByRank.get(rank);

    if (cards.size > 0) {
      const scored = selectedCards.filter((card) => (
        cards.has(card) ||
        stoneCards.has(card) ||
        splash
      ));
      return {
        hand: 'HighCard',
        scored,
        containsFlush: false,
        containsStraight: false,
        ...containsProps,
      };
    }
  }

  throw new Error('evaluateHand: unreachable');
}
