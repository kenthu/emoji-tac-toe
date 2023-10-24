import { playerEmoji } from '@/lib/emoji';
import { useGame } from '@/lib/redux';

const CURRENT_PLAYER_BACKGROUND = 'dark:bg-neutral-800 bg-neutral-100';
const CURRENT_PLAYER_ARROW = '«';

export const GameStatus = (): JSX.Element => {
  const { currentPlayer, wins } = useGame();

  return (
    <section className="grid grid-cols-[1fr_auto] gap-x-6 text-2xl">
      <div className={`rounded px-2 ${currentPlayer === 1 ? CURRENT_PLAYER_BACKGROUND : ''}`}>
        Player {playerEmoji(1)} {currentPlayer === 1 && CURRENT_PLAYER_ARROW}
      </div>
      <div>{wins[1]}</div>
      <div className={`rounded px-2 ${currentPlayer === 2 ? CURRENT_PLAYER_BACKGROUND : ''}`}>
        Player {playerEmoji(2)} {currentPlayer === 2 && CURRENT_PLAYER_ARROW}
      </div>
      <div>{wins[2]}</div>
    </section>
  );
};
