import { BoardResult } from '../BoardResult';

export function resultAddLog(result: BoardResult, subject: string | undefined, event: string, type?: string) {
  result.logs.push({
    subject,
    event,
    chips: result.chips,
    mults: result.mults,
    type,
  });
}
