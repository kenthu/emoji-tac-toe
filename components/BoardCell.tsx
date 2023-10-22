import { playerEmoji } from '@/lib/emoji';
import { getBoard, getCurrentPlayer, handleMove, useDispatch, useSelector } from '@/lib/redux';
import type { Col, Row } from '@/lib/types';

interface Props {
  row: Row;
  col: Col;
}

export const BoardCell = ({ row, col }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const board = useSelector(getBoard);
  const currentPlayer = useSelector(getCurrentPlayer);

  return (
    <td onClick={() => dispatch(handleMove(currentPlayer, row, col))}>
      {playerEmoji(board[row][col].player)}
    </td>
  );
};
