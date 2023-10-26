import type { Board, Player, Position } from '@/lib/types';

export const STARTING_PLAYER = 1;

export const EMOJI_DEFAULTS: Record<Player, string> = {
  1: 'X',
  2: 'O',
};

export const INITIAL_BOARD: Board = [
  [{ player: null }, { player: null }, { player: null }],
  [{ player: null }, { player: null }, { player: null }],
  [{ player: null }, { player: null }, { player: null }],
];

export const INITIAL_WINS: Record<Player, number> = {
  1: 0,
  2: 0,
};

// prettier-ignore
export const WIN_PATTERNS: Array<[Position, Position, Position]> = [
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
