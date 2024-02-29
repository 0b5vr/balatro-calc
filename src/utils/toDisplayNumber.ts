export function toDisplayNumber(num: number): string {
  if (num < 1e11) {
    return num.toLocaleString('en-US', { maximumFractionDigits: 1 });
  } else {
    return num.toExponential(3);
  }
}
