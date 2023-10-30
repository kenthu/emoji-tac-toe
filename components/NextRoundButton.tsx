import { GameButton } from '@/components/GameButton';
import { useGame } from '@/lib/redux';

export const NextRoundButton = (): JSX.Element => {
  const { areAllCellsOccupied, resetBoard, winner } = useGame();
  const isNextRoundEnabled = !!winner || areAllCellsOccupied;

  return <GameButton text="Next round" isEnabled={isNextRoundEnabled} onClick={resetBoard} />;
};
