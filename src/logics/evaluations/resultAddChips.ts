import { BoardResult } from '../BoardResult';

export function resultAddChips(result: BoardResult, subject: string, chips: number) {
  result.chips += chips;

  result.logs.push({
    subject,
    event: `+${chips}`,
    chips: result.chips,
    mults: result.mults,
    type: 'chip',
  });
}
