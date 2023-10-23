import { gameSlice, settingsSlice } from './slices';

export const reducer = {
  game: gameSlice.reducer,
  settings: settingsSlice.reducer,
};
