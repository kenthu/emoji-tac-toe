import type { ReduxState } from '@/lib/redux';
import { Player } from '@/lib/types';

export const getEmojiPlayerEditing = (state: ReduxState): Player | null =>
  state.settings.emojiPlayerEditing;

export const getIsEmojiModalOpen = (state: ReduxState): boolean =>
  !!state.settings.emojiPlayerEditing;
