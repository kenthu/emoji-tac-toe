import type { ReduxState } from '@/lib/redux';

export const getIsModalOpen = (state: ReduxState): boolean => state.settings.isModalOpen;
