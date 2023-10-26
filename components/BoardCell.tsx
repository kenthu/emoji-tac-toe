import { useGame, useSettings } from '@/lib/redux';
import type { Col, Row } from '@/lib/types';

interface Props {
  row: Row;
  col: Col;
}

export const BoardCell = ({ row, col }: Props): JSX.Element => {
  const { board, handleMove } = useGame();
  const { getPlayerEmoji } = useSettings();

  return (
    <td
      className="h-2/6 w-4/12 border border-solid border-black p-2 text-center text-8xl dark:border-white"
      onClick={() => handleMove(row, col)}
    >
      {getPlayerEmoji(board[row][col].player)}
    </td>
  );
};
