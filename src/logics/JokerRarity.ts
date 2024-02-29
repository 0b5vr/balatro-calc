export const JokerRarity = [
  'Common',
  'Uncommon',
  'Rare',
  'Legendary',
] as const;
export type JokerRarity = typeof JokerRarity[number];
