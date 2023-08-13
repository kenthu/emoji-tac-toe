import { Player } from '@/lib/types';

export const playerEmoji = (player: Player | null): string => {
  switch (player) {
    case 1:
      return '🐱';
    case 2:
      return '❤️';
    case null:
      return '';
  }
};
