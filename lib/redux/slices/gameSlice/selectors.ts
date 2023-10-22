import { WIN_PATTERNS } from '@/lib/constants';
import type { ReduxState } from '@/lib/redux';
import type { Col, Row, Player, Board } from '@/lib/types';

export const getBoard = (state: ReduxState): Board => state.game.board;

export const getCurrentPlayer = (state: ReduxState): Player | null => state.game.currentPlayer;

export const getWinner = (state: ReduxState): Player | null => {
  const board = state.game.board;
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
};

export const hasWinner = (state: ReduxState): boolean => !!getWinner(state);

export const isCellOccupied = (state: ReduxState, row: Row, col: Col): boolean =>
  !!state.game.board[row][col].player;
