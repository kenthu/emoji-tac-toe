import { useGame, useSettings } from '@/lib/redux';
import { Player } from '@/lib/types';

interface Props {
  player: Player;
}

export const Score = ({ player }: Props): JSX.Element => {
  const { currentPlayer, wins } = useGame();
  const { getPlayerEmoji, openEmojiModal } = useSettings();

  const backgroundClass =
    player === currentPlayer
      ? 'dark:bg-neutral-700 bg-neutral-100'
      : 'dark:bg-neutral-800 bg-neutral-200';

  const isRightSide = player === 2;
  const currentPlayerArrow = isRightSide ? '»' : '«';

  return (
    <div className={`flex gap-4 ${isRightSide && 'flex-row-reverse'}`}>
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-xl text-5xl ${backgroundClass}`}
        onClick={() => openEmojiModal(player)}
      >
        {getPlayerEmoji(player)}
      </div>
      <div className="flex flex-col py-1">
        <div className="text-4xl">{wins[player]}</div>
        <div className={`flex text-base ${isRightSide && 'justify-end'}`}>
          {player === currentPlayer && currentPlayerArrow}
        </div>
      </div>
    </div>
  );
};
