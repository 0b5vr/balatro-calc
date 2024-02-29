import { BoardResult } from '../BoardResult';

export function resultAddMults(result: BoardResult, subject: string, mults: number) {
  result.mults += mults;

  result.logs.push({
    subject,
    event: `+${mults} mult`,
    chips: result.chips,
    mults: result.mults,
    type: 'mult',
  });
}
