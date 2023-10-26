import { playerEmoji } from '@/lib/emoji';
import { useGame, useSettings } from '@/lib/redux';
import { Player } from '@/lib/types';

interface Props {
  player: Player;
}

export const Score = ({ player }: Props): JSX.Element => {
  const { currentPlayer, wins } = useGame();
  const { openEmojiModal } = useSettings();

  const backgroundClass =
    player === currentPlayer
      ? 'dark:bg-neutral-700 bg-neutral-100'
      : 'dark:bg-neutral-800 bg-neutral-200';

  const isRightSide = player === 2;
  const currentPlayerArrow = isRightSide ? '»' : '«';

  return (
    <div className={`flex gap-5 ${isRightSide && 'flex-row-reverse'}`}>
      <div
        className={`flex h-20 w-20 items-center justify-center rounded-2xl text-6xl ${backgroundClass}`}
        onClick={() => openEmojiModal(player)}
      >
        {playerEmoji(player)}
      </div>
      <div className="flex flex-col py-2">
        <div className="text-5xl">{wins[player]}</div>
        <div className="text-xl">{player === currentPlayer && currentPlayerArrow}</div>
      </div>
    </div>
  );
};
