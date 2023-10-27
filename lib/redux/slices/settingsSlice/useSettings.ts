import React from 'react';

import { getEmojiModalPlayer, getIsEmojiModalOpen, getPlayerEmojiMap } from './selectors';
import { settingsSlice } from './settingsSlice';

import { EMOJI_DEFAULTS } from '@/lib/constants';
import { getLocalStoragePlayerEmoji, setLocalStoragePlayerEmoji } from '@/lib/localStorage';
import { useDispatch, useSelector } from '@/lib/redux';
import { Player } from '@/lib/types';

export const useSettings = () => {
  const dispatch = useDispatch();

  const emojiModalPlayer = useSelector(getEmojiModalPlayer);
  const isEmojiModalOpen = useSelector(getIsEmojiModalOpen);
  const playerEmojiMap = useSelector(getPlayerEmojiMap);

  const getPlayerEmoji = React.useCallback(
    (player: Player | null): string => {
      if (player === null) {
        return '';
      }

      return playerEmojiMap[player];
    },
    [playerEmojiMap],
  );

  const setPlayerEmoji = React.useCallback(
    (player: Player, emoji: string) => {
      dispatch(settingsSlice.actions.setPlayerEmoji({ player, emoji }));
      setLocalStoragePlayerEmoji(player, emoji);
    },
    [dispatch],
  );

  const loadSettingsFromLocalStorage = React.useCallback(() => {
    const localStoragePlayerEmoji = getLocalStoragePlayerEmoji();
    const allPlayers: Player[] = [1, 2];
    for (const player of allPlayers) {
      const emojiFromLocalStorage = localStoragePlayerEmoji[player];
      const emojiToUse = emojiFromLocalStorage ?? EMOJI_DEFAULTS[player];
      dispatch(settingsSlice.actions.setPlayerEmoji({ player, emoji: emojiToUse }));
    }
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
    loadSettingsFromLocalStorage,
    openEmojiModal,
    setPlayerEmoji,
  };
};
