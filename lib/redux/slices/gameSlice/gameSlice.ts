import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { INITIAL_BOARD, STARTING_PLAYER } from '@/lib/constants';
import type { Board, Col, Player, Row } from '@/lib/types';

export interface GameSliceState {
  board: Board;
  currentPlayer: Player;
  wins: Record<Player, number>;
}

const initialState: GameSliceState = {
  board: INITIAL_BOARD,
  currentPlayer: STARTING_PLAYER,
  wins: {
    1: 0,
    2: 0,
  },
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    markCell: (
      state,
      action: PayloadAction<{
        player: Player;
        row: Row;
        col: Col;
      }>,
    ) => {
      const { player, row, col } = action.payload;
      state.board[row][col].player = player;
    },
    togglePlayer: (state) => {
      state.currentPlayer = state.currentPlayer === 1 ? 2 : 1;
    },
    recordWin: (state, action: PayloadAction<Player>) => {
      const player = action.payload;
      state.wins[player]++;
    },
  },
});
