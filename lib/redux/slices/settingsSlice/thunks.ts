import { getPlayerEmojiMap, getRecentEmojiList } from './selectors';
import { settingsSlice } from './settingsSlice';

import { EMOJI_DEFAULTS } from '@/lib/constants';
import type { ReduxThunkAction } from '@/lib/redux';
import type { Player } from '@/lib/types';

const RECENT_EMOJI_LIST_KEY = 'recent-emoji-list';

const emojiPlayerKey = (player: Player): string => `emoji-player-${player}`;

// export const getLocalStoragePlayerEmoji = (): Partial<PlayerEmojiMap> => ({
//   1: localStorage.getItem(emojiPlayerKey(1)) ?? undefined,
//   2: localStorage.getItem(emojiPlayerKey(2)) ?? undefined,
// });

export const saveToLocalStorage = (): ReduxThunkAction => (dispatch, getState) => {
  const state = getState();
  const playerEmojiMap = getPlayerEmojiMap(state);
  const recentEmojiList = getRecentEmojiList(state);

  localStorage.setItem(emojiPlayerKey(1), playerEmojiMap[1]);
  localStorage.setItem(emojiPlayerKey(2), playerEmojiMap[2]);
  localStorage.setItem(RECENT_EMOJI_LIST_KEY, JSON.stringify(recentEmojiList));
};

export const loadFromLocalStorage = (): ReduxThunkAction => (dispatch, getState) => {
  // Load playerEmojiMap
  const allPlayers: Player[] = [1, 2];
  for (const player of allPlayers) {
    const emojiFromLocalStorage = localStorage.getItem(emojiPlayerKey(player));
    const emojiToUse = emojiFromLocalStorage || EMOJI_DEFAULTS[player];
    dispatch(settingsSlice.actions.setPlayerEmoji({ player, emoji: emojiToUse }));
  }

  // Load recentEmojiList
  const recentEmojiList = localStorage.getItem(RECENT_EMOJI_LIST_KEY);
  if (recentEmojiList) {
    dispatch(settingsSlice.actions.setRecentEmojiList(JSON.parse(recentEmojiList)));
  }
};

// const x = {
//   p1: localStorage['emoji-player-1'],
//   p2: localStorage['emoji-player-2'],
//   list: localStorage['recent-emoji-list'],
// };
