import type { Player, PlayerEmojiMap } from '@/lib/types';

const emojiPlayerKey = (player: Player): string => `emoji-player-${player}`;

export const setLocalStoragePlayerEmoji = (player: Player, emoji: string): void => {
  localStorage.setItem(emojiPlayerKey(player), emoji);
};

export const getLocalStoragePlayerEmoji = (): Partial<PlayerEmojiMap> => ({
  1: localStorage.getItem(emojiPlayerKey(1)) ?? undefined,
  2: localStorage.getItem(emojiPlayerKey(2)) ?? undefined,
});
