import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { Player } from '@/lib/types';

export interface SettingsSliceState {
  /** Which player we're currently editing in emoji modal. If null, then modal is closed */
  emojiModalPlayer: Player | null;
}

const initialState: SettingsSliceState = {
  emojiModalPlayer: null,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setEmojiModalPlayer: (state, action: PayloadAction<Player | null>) => {
      state.emojiModalPlayer = action.payload;
    },
  },
});
