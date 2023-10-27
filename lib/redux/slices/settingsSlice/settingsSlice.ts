import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { Player, PlayerEmojiMap } from '@/lib/types';

export interface SettingsSliceState {
  /** Which player we're currently editing in emoji modal. If null, then modal is closed */
  emojiModalPlayer: Player | null;
  playerEmojiMap: PlayerEmojiMap;
  recentEmoji: Array<string>;
}

const initialState: SettingsSliceState = {
  emojiModalPlayer: null,
  // Start with blank emoji, so we don't see a flash of X and O while we wait for the emoji settings
  // to load from local storage.
  playerEmojiMap: {
    1: '',
    2: '',
  },
  recentEmoji: [],
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
  },
});
