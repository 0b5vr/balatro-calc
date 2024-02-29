import { JokerBehavior } from './JokerBehavior';

export const hangingChadBehavior: JokerBehavior = {
  displayName: 'Hanging Chad',
  rarity: 'Common',
  shouldRetriggerCard(result, _board, _joker, scored) {
    const firstScored = result.handResult!.scored[0];
    return firstScored === scored;
  },
};
