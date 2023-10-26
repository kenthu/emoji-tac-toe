import React from 'react';

import { getEmojiModalPlayer, getIsEmojiModalOpen } from './selectors';
import { settingsSlice } from './settingsSlice';

import { useDispatch, useSelector } from '@/lib/redux';
import { Player } from '@/lib/types';

export const useSettings = () => {
  const dispatch = useDispatch();

  const emojiModalPlayer = useSelector(getEmojiModalPlayer);
  const isEmojiModalOpen = useSelector(getIsEmojiModalOpen);

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
    isEmojiModalOpen,
    openEmojiModal,
  };
};
