import { SettingsSliceState } from './settingsSlice';

import type { ReduxState } from '@/lib/redux';
import { Player } from '@/lib/types';

export const getEmojiModalPlayer = (state: ReduxState): Player | null =>
  state.settings.emojiModalPlayer;

export const getIsEmojiModalOpen = (state: ReduxState): boolean =>
  !!state.settings.emojiModalPlayer;

export const getPlayerEmojiMap = (state: ReduxState): SettingsSliceState['playerEmojiMap'] =>
  state.settings.playerEmojiMap;
