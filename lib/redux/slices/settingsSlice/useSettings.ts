import React from 'react';

import { getIsModalOpen } from './selectors';
import { settingsSlice } from './settingsSlice';

import { useDispatch, useSelector } from '@/lib/redux';

export const useSettings = () => {
  const dispatch = useDispatch();

  const isModalOpen = useSelector(getIsModalOpen);

  const openSettingsModal = React.useCallback(() => {
    console.log('inside openSettingsModal');
    dispatch(settingsSlice.actions.setModalOpen(true));
  }, [dispatch]);

  const closeSettingsModal = React.useCallback(() => {
    dispatch(settingsSlice.actions.setModalOpen(false));
  }, [dispatch]);

  return {
    closeSettingsModal,
    isModalOpen,
    openSettingsModal,
  };
};
