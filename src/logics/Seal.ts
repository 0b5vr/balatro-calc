export const Seal = [
  'GoldSeal',
  'RedSeal',
  'BlueSeal',
  'PurpleSeal',
] as const;
export type Seal = typeof Seal[number];
