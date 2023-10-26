import type { ReduxState } from '@/lib/redux';
import type { Player, PlayerEmojiMap } from '@/lib/types';

export const getEmojiModalPlayer = (state: ReduxState): Player | null =>
  state.settings.emojiModalPlayer;

export const getIsEmojiModalOpen = (state: ReduxState): boolean =>
  !!state.settings.emojiModalPlayer;

export const getPlayerEmojiMap = (state: ReduxState): PlayerEmojiMap =>
  state.settings.playerEmojiMap;
