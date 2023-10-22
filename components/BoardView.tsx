import React from 'react';

import { playerEmoji } from '@/lib/emoji';
import { getBoard, getCurrentPlayer, handleMove, useDispatch, useSelector } from '@/lib/redux';

export default function BoardView(): JSX.Element {
  const dispatch = useDispatch();
  const board = useSelector(getBoard);
  const currentPlayer = useSelector(getCurrentPlayer);

  return (
    <table cellSpacing="2" border={10} className="text-xl">
      <tbody>
        <tr>
          <td onClick={() => dispatch(handleMove(currentPlayer, 0, 0))}>
            {playerEmoji(board[0][0].player)}
          </td>
          <td onClick={() => dispatch(handleMove(currentPlayer, 0, 1))}>
            {playerEmoji(board[0][1].player)}
          </td>
          <td onClick={() => dispatch(handleMove(currentPlayer, 0, 2))}>
            {playerEmoji(board[0][2].player)}
          </td>
        </tr>
        <tr>
          <td onClick={() => dispatch(handleMove(currentPlayer, 1, 0))}>
            {playerEmoji(board[1][0].player)}
          </td>
          <td onClick={() => dispatch(handleMove(currentPlayer, 1, 1))}>
            {playerEmoji(board[1][1].player)}
          </td>
          <td onClick={() => dispatch(handleMove(currentPlayer, 1, 2))}>
            {playerEmoji(board[1][2].player)}
          </td>
        </tr>
        <tr>
          <td onClick={() => dispatch(handleMove(currentPlayer, 2, 0))}>
            {playerEmoji(board[2][0].player)}
          </td>
          <td onClick={() => dispatch(handleMove(currentPlayer, 2, 1))}>
            {playerEmoji(board[2][1].player)}
          </td>
          <td onClick={() => dispatch(handleMove(currentPlayer, 2, 2))}>
            {playerEmoji(board[2][2].player)}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
