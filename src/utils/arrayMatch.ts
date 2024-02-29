/**
 * 0% confidence about the function naming
 */
export function arrayMatch<T extends string>(array: readonly T[], str: string): T | null {
  for (const e of array) {
    if (e.toLowerCase() === str.toLowerCase()) {
      return e;
    }
  }

  return null;
}
