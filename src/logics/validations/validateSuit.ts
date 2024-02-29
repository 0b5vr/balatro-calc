import { Suit } from '../Suit';

export function validateSuit(input: string): input is Suit {
  return Suit.includes(input as Suit);
}
