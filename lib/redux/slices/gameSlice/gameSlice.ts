import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { INITIAL_BOARD, INITIAL_WINS, STARTING_PLAYER } from '@/lib/constants';
import type { Board, Col, Player, Row } from '@/lib/types';

export interface GameSliceState {
  board: Board;
  currentPlayer: Player;
  wins: Record<Player, number>;
}

const initialState: GameSliceState = {
  board: INITIAL_BOARD,
  currentPlayer: STARTING_PLAYER,
  wins: INITIAL_WINS,
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
    recordWin: (state, action: PayloadAction<Player>) => {
      const player = action.payload;
      state.wins[player]++;
    },
    resetBoard: (state) => {
      state.board = INITIAL_BOARD;
      state.currentPlayer = STARTING_PLAYER;
    },
    resetScores: (state) => {
      state.board = INITIAL_BOARD;
      state.currentPlayer = STARTING_PLAYER;
      state.wins = INITIAL_WINS;
    },
    togglePlayer: (state) => {
      state.currentPlayer = state.currentPlayer === 1 ? 2 : 1;
    },
  },
});
