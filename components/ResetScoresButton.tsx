import { GameButton } from '@/components/GameButton';
import { useGame } from '@/lib/redux';

export const ResetScoresButton = (): JSX.Element => {
  const { resetScores } = useGame();

  return <GameButton text="Reset scores" isEnabled={true} onClick={resetScores} />;
};
