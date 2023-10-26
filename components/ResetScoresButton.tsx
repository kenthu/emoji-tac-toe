import { useGame } from '@/lib/redux';

export const ResetScoresButton = (): JSX.Element => {
  const { resetScores } = useGame();

  return (
    <button
      className={`my-2 rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-700`}
      onClick={() => {
        resetScores();
      }}
    >
      Reset scores
    </button>
  );
};
