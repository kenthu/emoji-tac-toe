import { BoardCell } from '@/components/BoardCell';
import { playerEmoji } from '@/lib/emoji';
import { useGame } from '@/lib/redux';

export default function BoardView(): JSX.Element {
  const { currentPlayer, resetBoard, winner } = useGame();

  return (
    <div>
      {winner && (
        <div>
          Winner: {playerEmoji(winner)}
          <button onClick={resetBoard}>Reset</button>
        </div>
      )}
      {!winner && <h2>Next turn: {playerEmoji(currentPlayer)}</h2>}
      <table cellSpacing="2" border={10} className="text-xl">
        <tbody>
          <tr>
            <BoardCell row={0} col={0} />
            <BoardCell row={0} col={1} />
            <BoardCell row={0} col={2} />
          </tr>
          <tr>
            <BoardCell row={1} col={0} />
            <BoardCell row={1} col={1} />
            <BoardCell row={1} col={2} />
          </tr>
          <tr>
            <BoardCell row={2} col={0} />
            <BoardCell row={2} col={1} />
            <BoardCell row={2} col={2} />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
