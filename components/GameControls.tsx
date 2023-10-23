import { Cog8ToothIcon } from '@heroicons/react/24/outline';

import { playerEmoji } from '@/lib/emoji';
import { useGame, useSettings } from '@/lib/redux';

export const GameControls = (): JSX.Element => {
  const { areAllCellsOccupied, currentPlayer, resetBoard, winner } = useGame();
  const { openSettingsModal } = useSettings();

  let status: string;
  let showResetButton = false;

  if (winner) {
    status = `Winner: ${playerEmoji(winner)}`;
    showResetButton = true;
  } else if (areAllCellsOccupied) {
    status = 'Tie!';
    showResetButton = true;
  } else {
    status = `Turn: ${playerEmoji(currentPlayer)}`;
  }

  return (
    <section>
      <h2 className="text-3xl">{status}</h2>
      <Cog8ToothIcon className="h-6 w-6" onClick={openSettingsModal} />
      {showResetButton && (
        <div>
          <button
            className="my-2 rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-700"
            onClick={resetBoard}
          >
            Reset
          </button>
        </div>
      )}
    </section>
  );
};
