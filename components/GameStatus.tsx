import { playerEmoji } from '@/lib/emoji';
import { useGame, useSettings } from '@/lib/redux';

const CURRENT_PLAYER_BACKGROUND = 'dark:bg-neutral-800 bg-neutral-100';
const CURRENT_PLAYER_ARROW = '«';

export const GameStatus = (): JSX.Element => {
  const { currentPlayer, wins } = useGame();
  const { openEmojiModal } = useSettings();

  return (
    <section className="grid grid-cols-[9rem_auto] gap-x-6 text-2xl">
      <div
        className={`rounded px-2 ${currentPlayer === 1 ? CURRENT_PLAYER_BACKGROUND : ''}`}
        onClick={() => openEmojiModal(1)}
      >
        Player {playerEmoji(1)} {currentPlayer === 1 && CURRENT_PLAYER_ARROW}
      </div>
      <div>{wins[1]}</div>
      <div
        className={`rounded px-2 ${currentPlayer === 2 ? CURRENT_PLAYER_BACKGROUND : ''}`}
        onClick={() => openEmojiModal(2)}
      >
        Player {playerEmoji(2)} {currentPlayer === 2 && CURRENT_PLAYER_ARROW}
      </div>
      <div>{wins[2]}</div>
    </section>
  );
};
