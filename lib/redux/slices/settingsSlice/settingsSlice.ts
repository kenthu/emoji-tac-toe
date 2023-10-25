import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { Player } from '@/lib/types';

export interface SettingsSliceState {
  /** For emoji modal: which player's settings we have modal open for */
  emojiPlayerEditing: Player | null;
}

const initialState: SettingsSliceState = {
  emojiPlayerEditing: null,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setEmojiPlayerEditing: (state, action: PayloadAction<Player | null>) => {
      state.emojiPlayerEditing = action.payload;
    },
  },
});
