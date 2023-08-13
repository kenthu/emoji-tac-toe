import { produce } from 'immer';
import { Player } from '@/lib/types';
import React from 'react';

export type Cell = {
  player: Player | null;
};

type Board = [[Cell, Cell, Cell], [Cell, Cell, Cell], [Cell, Cell, Cell]];

export type Row = 0 | 1 | 2;
export type Col = 0 | 1 | 2;
export type Position = { row: Row; col: Col };

// prettier-ignore
const WIN_PATTERNS: Array<[Position, Position, Position]> = [
  // Rows
  [{ row: 0, col: 0}, { row: 0, col: 1 }, { row: 0, col: 2 }],
  [{ row: 1, col: 0}, { row: 1, col: 1 }, { row: 1, col: 2 }],
  [{ row: 2, col: 0}, { row: 2, col: 1 }, { row: 2, col: 2 }],
  // Columns
  [{ row: 0, col: 0}, { row: 1, col: 0 }, { row: 2, col: 0 }],
  [{ row: 0, col: 1}, { row: 1, col: 1 }, { row: 2, col: 1 }],
  [{ row: 0, col: 2}, { row: 1, col: 2 }, { row: 2, col: 2 }],
  // Diagonals
  [{ row: 0, col: 0}, { row: 1, col: 1 }, { row: 2, col: 2 }],
  [{ row: 0, col: 2}, { row: 1, col: 1 }, { row: 2, col: 0 }],
];

const winnerForBoard = (board: Board): Player | null => {
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

export const useBoard = () => {
  const [board, setBoard] = React.useState<Board>([
    [{ player: null }, { player: null }, { player: null }],
    [{ player: null }, { player: null }, { player: null }],
    [{ player: null }, { player: null }, { player: null }],
  ]);

  const [winner, setWinner] = React.useState<Player>();

  React.useEffect(() => {
    if (winner) return;
    const maybeWinner = winnerForBoard(board);
    if (maybeWinner) {
      setWinner(maybeWinner);
      alert(`Player ${maybeWinner} has won!`);
    }
  }, [winner, board, setWinner]);

  /**
   * Attempts to mark a cell for a given player, after checking to see if cell already taken
   * @returns whether we were able to successfully mark this cell
   */
  const markCell = (player: Player, row: Row, column: Col): boolean => {
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
