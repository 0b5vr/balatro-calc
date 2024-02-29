import { BoardResult } from '../BoardResult';

export function resultMultMults(result: BoardResult, subject: string, multiplier: number) {
  result.mults *= multiplier;

  result.logs.push({
    subject,
    event: `x${multiplier} mult`,
    chips: result.chips,
    mults: result.mults,
    type: 'mult',
  });
}
