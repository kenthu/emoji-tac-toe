import { gameSlice } from './gameSlice';
import { getWinner, isCellOccupied } from './selectors';

import type { ReduxThunkAction } from '@/lib/redux';
import type { Col, Player, Row } from '@/lib/types';

export const handleMove =
  (player: Player | null, row: Row, col: Col): ReduxThunkAction =>
  (dispatch, getState) => {
    if (player === null) {
      return;
    }

    const state = getState();

    // Don't allow move if game over
    if (getWinner(state)) {
      return;
    }

    if (isCellOccupied(state, row, col)) {
      return;
    }

    dispatch(gameSlice.actions.markCell({ player, row, col }));

    const newState = getState();
    if (getWinner(newState)) {
      dispatch(gameSlice.actions.recordWin(player));
    } else {
      dispatch(gameSlice.actions.togglePlayer());
    }
  };
