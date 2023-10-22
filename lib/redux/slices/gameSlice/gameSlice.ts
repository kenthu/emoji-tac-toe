import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { INITIAL_BOARD, STARTING_PLAYER } from '@/lib/constants';
import type { Board, Col, Player, Row } from '@/lib/types';

interface MarkCellActionProps {
  player: Player;
  row: Row;
  column: Col;
}

export interface GameSliceState {
  board: Board;
  currentPlayer: Player;
  winner: Player | null;
}

const initialState: GameSliceState = {
  board: INITIAL_BOARD,
  currentPlayer: STARTING_PLAYER,
  winner: null,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    markCell: (state, action: PayloadAction<MarkCellActionProps>) => {
      const { player, row, column } = action.payload;
      state.board[row][column].player = player;
    },
    togglePlayer: (state) => {
      state.currentPlayer = state.currentPlayer === 1 ? 2 : 1;
    },
  },
});
