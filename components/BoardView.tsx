'use client';

import { Cell, Col, Row, useBoard } from '@/hooks/useBoard';
import { useGame } from '@/hooks/useGame';
import React from 'react';

const emojiForCell = (cell: Cell): string => {
  switch (cell.player) {
    case 1:
      return '🐱';
    case 2:
      return '❤️';
    case null:
      return '';
  }
};

export const BoardView = (): JSX.Element => {
  const { board, markCell } = useBoard();
  const { player, togglePlayer } = useGame();

  const handleMove = React.useCallback(
    (row: Row, col: Col): void => {
      const executedMove = markCell(player, row, col);
      if (executedMove) {
        togglePlayer();
      }
    },
    [markCell, player, togglePlayer],
  );

  return (
    <table cellSpacing="2" border={10} className="text-xl">
      <tbody>
        <tr>
          <td onClick={() => handleMove(0, 0)}>{emojiForCell(board[0][0])}</td>
          <td onClick={() => handleMove(0, 1)}>{emojiForCell(board[0][1])}</td>
          <td onClick={() => handleMove(0, 2)}>{emojiForCell(board[0][2])}</td>
        </tr>
        <tr>
          <td onClick={() => handleMove(1, 0)}>{emojiForCell(board[1][0])}</td>
          <td onClick={() => handleMove(1, 1)}>{emojiForCell(board[1][1])}</td>
          <td onClick={() => handleMove(1, 2)}>{emojiForCell(board[1][2])}</td>
        </tr>
        <tr>
          <td onClick={() => handleMove(2, 0)}>{emojiForCell(board[2][0])}</td>
          <td onClick={() => handleMove(2, 1)}>{emojiForCell(board[2][1])}</td>
          <td onClick={() => handleMove(2, 2)}>{emojiForCell(board[2][2])}</td>
        </tr>
      </tbody>
    </table>
  );
};
