import { BoardCell } from '@/components/BoardCell';
import { GameControls } from '@/components/GameControls';

export default function BoardView(): JSX.Element {
  return (
    <div>
      <GameControls />
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
