import { playerEmoji } from '@/lib/emoji';
import { useGame } from '@/lib/redux';

export const Scoreboard = (): JSX.Element => {
  const { wins } = useGame();

  return (
    <div>
      <div>
        Player {playerEmoji(1)}: {wins[1]}
      </div>
      <div>
        Player {playerEmoji(2)}: {wins[2]}
      </div>
    </div>
  );
};
