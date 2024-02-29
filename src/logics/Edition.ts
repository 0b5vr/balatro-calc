export const Edition = [
  'Foil',
  'Holographic',
  'Polychrome',
] as const;
export type Edition = typeof Edition[number];
