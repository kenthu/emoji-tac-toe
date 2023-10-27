import React from 'react';

import {
  getEmojiModalPlayer,
  getIsEmojiModalOpen,
  getPlayerEmojiMap,
  getRecentEmojiList,
} from './selectors';
import { settingsSlice } from './settingsSlice';

import {
  loadFromLocalStorage as loadFromLocalStorageThunk,
  saveToLocalStorage,
  useDispatch,
  useSelector,
} from '@/lib/redux';
import { Player } from '@/lib/types';

export const useSettings = () => {
  const dispatch = useDispatch();

  const emojiModalPlayer = useSelector(getEmojiModalPlayer);
  const isEmojiModalOpen = useSelector(getIsEmojiModalOpen);
  const playerEmojiMap = useSelector(getPlayerEmojiMap);
  const recentEmojiList = useSelector(getRecentEmojiList);

  const getPlayerEmoji = React.useCallback(
    (player: Player | null): string => {
      if (player === null) {
        return '';
      }

      return playerEmojiMap[player];
    },
    [playerEmojiMap],
  );

  /**
   * Handle selection of player emoji. Includes updating recent emoji list and backing up to local
   * storage.
   */
  const setPlayerEmoji = React.useCallback(
    (player: Player, emoji: string) => {
      dispatch(settingsSlice.actions.setPlayerEmoji({ player, emoji }));
      dispatch(settingsSlice.actions.setRecentEmoji(emoji));
      dispatch(saveToLocalStorage());
    },
    [dispatch],
  );

  const loadFromLocalStorage = React.useCallback(() => {
    dispatch(loadFromLocalStorageThunk());
  }, [dispatch]);

  const openEmojiModal = React.useCallback(
    (player: Player) => {
      dispatch(settingsSlice.actions.setEmojiModalPlayer(player));
    },
    [dispatch],
  );

  const closeEmojiModal = React.useCallback(() => {
    dispatch(settingsSlice.actions.setEmojiModalPlayer(null));
  }, [dispatch]);

  return {
    closeEmojiModal,
    emojiModalPlayer,
    getPlayerEmoji,
    isEmojiModalOpen,
    loadFromLocalStorage,
    openEmojiModal,
    recentEmojiList,
    setPlayerEmoji,
  };
};
