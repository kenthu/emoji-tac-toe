import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { EMOJI_DEFAULTS } from '@/lib/constants';
import { Player } from '@/lib/types';

export interface SettingsSliceState {
  /** Which player we're currently editing in emoji modal. If null, then modal is closed */
  emojiModalPlayer: Player | null;
  playerEmojiMap: Record<Player, string>;
  recentEmoji: Array<string>;
}

const initialState: SettingsSliceState = {
  emojiModalPlayer: null,
  playerEmojiMap: EMOJI_DEFAULTS,
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
