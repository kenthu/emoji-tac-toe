import { createSelector } from '@reduxjs/toolkit';

import { WIN_PATTERNS } from '@/lib/constants';
import type { ReduxState } from '@/lib/redux';
import type { Col, Row, Player, Board } from '@/lib/types';

export const getBoard = (state: ReduxState): Board => state.game.board;

export const getCurrentPlayer = (state: ReduxState): Player | null => state.game.currentPlayer;

export const getWinner = createSelector(getBoard, (board): Player | null => {
  for (const [position1, position2, position3] of WIN_PATTERNS) {
    if (
      board[position1.row][position1.col].player &&
      board[position1.row][position1.col].player === board[position2.row][position2.col].player &&
      board[position1.row][position1.col].player === board[position3.row][position3.col].player
    ) {
      return board[position1.row][position1.col].player;
    }
  }

  return null;
});

export const isCellOccupied = (state: ReduxState, row: Row, col: Col): boolean =>
  !!state.game.board[row][col].player;

export const getAreAllCellsOccupied = createSelector(
  getBoard,
  (board): boolean =>
    !!(
      board[0][0].player &&
      board[0][1].player &&
      board[0][2].player &&
      board[1][0].player &&
      board[1][1].player &&
      board[1][2].player &&
      board[2][0].player &&
      board[2][1].player &&
      board[2][2].player
    ),
);
