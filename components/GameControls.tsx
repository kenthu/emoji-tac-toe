import { playerEmoji } from '@/lib/emoji';
import { useGame } from '@/lib/redux';

export const GameControls = (): JSX.Element => {
  const { areAllCellsOccupied, currentPlayer, resetBoard, winner } = useGame();

  if (winner) {
    return (
      <div>
        <div>Winner: {playerEmoji(winner)}</div>
        <div>
          <button onClick={resetBoard}>Reset</button>
        </div>
      </div>
    );
  }

  if (areAllCellsOccupied) {
    return (
      <div>
        <div>Tie!</div>
        <div>
          <button onClick={resetBoard}>Reset</button>
        </div>
      </div>
    );
  }

  return <h2>Next turn: {playerEmoji(currentPlayer)}</h2>;
};
