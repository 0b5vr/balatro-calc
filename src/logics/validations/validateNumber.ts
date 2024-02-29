export function validateNumber(input: string): boolean {
  const num = parseFloat(input);
  return !isNaN(num);
}
