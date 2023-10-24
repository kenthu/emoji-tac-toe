import { playerEmoji } from '@/lib/emoji';
import { useGame } from '@/lib/redux';

export const GameStatus = (): JSX.Element => {
  const { wins } = useGame();

  return (
    <section className="grid grid-cols-[1fr_auto] gap-x-6 text-2xl">
      <div>Player {playerEmoji(1)}</div>
      <div>{wins[1]}</div>
      <div>Player {playerEmoji(2)}</div>
      <div>{wins[2]}</div>
    </section>
  );
};
