import { useGame } from '@/lib/redux';

export const NextRoundButton = (): JSX.Element => {
  const { areAllCellsOccupied, resetBoard, winner } = useGame();

  const isNextRoundEnabled = winner || areAllCellsOccupied;

  return (
    <button
      className={`my-2 rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-700 ${
        isNextRoundEnabled ? '' : 'cursor-not-allowed opacity-50'
      }`}
      onClick={() => {
        if (isNextRoundEnabled) {
          resetBoard();
        }
      }}
    >
      Next round
    </button>
  );
};
