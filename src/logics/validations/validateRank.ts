import { Rank } from '../Rank';

export function validateRank(input: string): input is Rank {
  return Rank.includes(input as Rank);
}
