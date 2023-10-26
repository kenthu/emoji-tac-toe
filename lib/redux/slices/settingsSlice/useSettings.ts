import React from 'react';

import { getEmojiModalPlayer, getIsEmojiModalOpen, getPlayerEmojiMap } from './selectors';
import { settingsSlice } from './settingsSlice';

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
    },
    [dispatch],
  );

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
    openEmojiModal,
    setPlayerEmoji,
  };
};
