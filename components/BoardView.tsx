import { BoardCell } from '@/components/BoardCell';

export default function BoardView(): JSX.Element {
  return (
    <table className="h-80 w-80 border-2 border-solid border-black text-xl dark:border-white sm:h-96 sm:w-96">
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
  );
}
