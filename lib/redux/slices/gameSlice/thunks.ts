import toast from 'react-hot-toast';

import { gameSlice } from './gameSlice';
import { getAreAllCellsOccupied, getWinner, isCellOccupied } from './selectors';

import { getPlayerEmojiMap, type ReduxThunkAction } from '@/lib/redux';
import type { Col, Player, Row } from '@/lib/types';

const notify = (message: string) => {
  toast(message, {
    position: 'bottom-center',
    className: 'text-3xl',
    duration: 5000,
  });
};

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
      const playerEmoji = getPlayerEmojiMap(state)[player];
      notify(`${playerEmoji} has won!`);
    } else if (getAreAllCellsOccupied(newState)) {
      notify('This round is a tie!');
    } else {
      dispatch(gameSlice.actions.togglePlayer());
    }
  };
