export const Enhancement = [
  'Bonus',
  'Mult',
  'Wild',
  'Glass',
  'Steel',
  'Stone',
  'Gold',
  'Lucky',
] as const;
export type Enhancement = typeof Enhancement[number];
