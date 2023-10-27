import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { NUM_RECENT_EMOJI } from '@/lib/constants';
import { Player, PlayerEmojiMap } from '@/lib/types';

export interface SettingsSliceState {
  /** Which player we're currently editing in emoji modal. If null, then modal is closed */
  emojiModalPlayer: Player | null;
  playerEmojiMap: PlayerEmojiMap;
  recentEmojiList: string[];
}

const initialState: SettingsSliceState = {
  emojiModalPlayer: null,
  // Start with blank emoji, so we don't see a flash of X and O while we wait for the emoji settings
  // to load from local storage.
  playerEmojiMap: {
    1: '',
    2: '',
  },
  recentEmojiList: [],
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setEmojiModalPlayer: (state, action: PayloadAction<Player | null>) => {
      state.emojiModalPlayer = action.payload;
    },
    setPlayerEmoji: (state, action: PayloadAction<{ player: Player; emoji: string }>) => {
      const { player, emoji } = action.payload;
      state.playerEmojiMap[player] = emoji;
    },
    setRecentEmoji: (state, action: PayloadAction<string>) => {
      const emoji = action.payload;

      // If already in array, delete from array
      const existingIndex = state.recentEmojiList.findIndex((recentEmoji) => recentEmoji === emoji);
      if (existingIndex >= 0) {
        state.recentEmojiList.splice(existingIndex, 1);
      }

      state.recentEmojiList.unshift(emoji);

      if (state.recentEmojiList.length > NUM_RECENT_EMOJI) {
        state.recentEmojiList = state.recentEmojiList.slice(0, NUM_RECENT_EMOJI);
      }
    },
    setRecentEmojiList: (state, action: PayloadAction<string[]>) => {
      state.recentEmojiList = action.payload;
    },
  },
});
