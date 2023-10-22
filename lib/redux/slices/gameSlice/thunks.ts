import { gameSlice } from './gameSlice';
import { hasWinner, isCellOccupied } from './selectors';

import type { ReduxThunkAction } from '@/lib/redux';
import type { Col, Player, Row } from '@/lib/types';

export const handleMove =
  (player: Player | null, row: Row, col: Col): ReduxThunkAction =>
  (dispatch, getState) => {
    if (player === null) {
      return;
    }

    const state = getState();
    if (hasWinner(state)) {
      return;
    }
    if (isCellOccupied(state, row, col)) {
      return;
    }

    dispatch(gameSlice.actions.markCell({ player, row, col }));
    dispatch(gameSlice.actions.togglePlayer());
  };
