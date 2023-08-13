import { produce } from 'immer';
import { Player } from '@/lib/types';
import React from 'react';

export type Cell = {
  player: Player | null;
};

type Board = [[Cell, Cell, Cell], [Cell, Cell, Cell], [Cell, Cell, Cell]];

export type RowIndex = 0 | 1 | 2;

export type ColumnIndex = 0 | 1 | 2;

export const useBoard = () => {
  const [board, setBoard] = React.useState<Board>([
    [{ player: null }, { player: null }, { player: null }],
    [{ player: null }, { player: null }, { player: null }],
    [{ player: null }, { player: null }, { player: null }],
  ]);

  /**
   * Attempts to mark a cell for a given player, after checking to see if cell already taken
   * @returns whether we were able to successfully mark this cell
   */
  const markCell = (player: Player, row: RowIndex, column: ColumnIndex): boolean => {
    if (board[row][column].player) {
      return false;
    }

    setBoard(
      produce((draft) => {
        draft[row][column].player = player;
      }),
    );

    return true;
  };

  return { board, markCell };
};
