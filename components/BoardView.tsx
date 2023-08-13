import { produce } from 'immer';
import { Board, Col, Player, Row } from '@/lib/types';
import React, { Dispatch, SetStateAction } from 'react';
import { playerEmoji } from '@/lib/emoji';

interface Props {
  board: Board;
  setBoard: Dispatch<SetStateAction<Board>>;
  winner: Player | null;
  currentPlayer: Player;
  setCurrentPlayer: Dispatch<SetStateAction<Player>>;
}

export default function BoardView({
  board,
  setBoard,
  winner,
  currentPlayer,
  setCurrentPlayer,
}: Props): JSX.Element {
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

  const handleMove = (row: Row, col: Col): void => {
    if (winner) {
      return;
    }
    const executedMove = markCell(currentPlayer, row, col);
    if (executedMove) {
      setCurrentPlayer((player) => (player === 1 ? 2 : 1));
    }
  };

  return (
    <table cellSpacing="2" border={10} className="text-xl">
      <tbody>
        <tr>
          <td onClick={() => handleMove(0, 0)}>{playerEmoji(board[0][0].player)}</td>
          <td onClick={() => handleMove(0, 1)}>{playerEmoji(board[0][1].player)}</td>
          <td onClick={() => handleMove(0, 2)}>{playerEmoji(board[0][2].player)}</td>
        </tr>
        <tr>
          <td onClick={() => handleMove(1, 0)}>{playerEmoji(board[1][0].player)}</td>
          <td onClick={() => handleMove(1, 1)}>{playerEmoji(board[1][1].player)}</td>
          <td onClick={() => handleMove(1, 2)}>{playerEmoji(board[1][2].player)}</td>
        </tr>
        <tr>
          <td onClick={() => handleMove(2, 0)}>{playerEmoji(board[2][0].player)}</td>
          <td onClick={() => handleMove(2, 1)}>{playerEmoji(board[2][1].player)}</td>
          <td onClick={() => handleMove(2, 2)}>{playerEmoji(board[2][2].player)}</td>
        </tr>
      </tbody>
    </table>
  );
}
