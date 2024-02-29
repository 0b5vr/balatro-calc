export function validateInteger(input: string): boolean {
  const num = parseInt(input, 10);
  return !isNaN(num);
}
