import { EMOJI_DEFAULTS } from '@/lib/constants';
import { Player } from '@/lib/types';

export const playerEmoji = (player: Player | null): string => {
  if (player === null) {
    return '';
  }

  return EMOJI_DEFAULTS[player];
};
