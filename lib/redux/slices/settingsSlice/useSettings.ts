import React from 'react';

import { getEmojiPlayerEditing, getIsEmojiModalOpen } from './selectors';
import { settingsSlice } from './settingsSlice';

import { useDispatch, useSelector } from '@/lib/redux';
import { Player } from '@/lib/types';

export const useSettings = () => {
  const dispatch = useDispatch();

  const emojiPlayerEditing = useSelector(getEmojiPlayerEditing);
  const isEmojiModalOpen = useSelector(getIsEmojiModalOpen);

  const openEmojiModal = React.useCallback(
    (player: Player) => {
      dispatch(settingsSlice.actions.setEmojiPlayerEditing(player));
    },
    [dispatch],
  );

  const closeEmojiModal = React.useCallback(() => {
    dispatch(settingsSlice.actions.setEmojiPlayerEditing(null));
  }, [dispatch]);

  return {
    closeEmojiModal,
    emojiPlayerEditing,
    isEmojiModalOpen,
    openEmojiModal,
  };
};
