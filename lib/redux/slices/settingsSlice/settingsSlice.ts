import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface SettingsSliceState {
  isModalOpen: boolean;
}

const initialState: SettingsSliceState = {
  isModalOpen: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setModalOpen: (state, action: PayloadAction<boolean>) => {
      const isModalOpen = action.payload;
      state.isModalOpen = isModalOpen;
    },
  },
});
