import { playerEmoji } from '@/lib/emoji';
import { useGame } from '@/lib/redux';
import type { Col, Row } from '@/lib/types';

interface Props {
  row: Row;
  col: Col;
}

export const BoardCell = ({ row, col }: Props): JSX.Element => {
  const { board, handleMove } = useGame();

  return <td onClick={() => handleMove(row, col)}>{playerEmoji(board[row][col].player)}</td>;
};
