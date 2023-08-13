import { WIN_PATTERNS } from '@/lib/constants';
import { Board, Player } from '@/lib/types';

export const winnerForBoard = (board: Board): Player | null => {
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
