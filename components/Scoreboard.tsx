import { playerEmoji } from '@/lib/emoji';
import { useGame } from '@/lib/redux';

export const Scoreboard = (): JSX.Element => {
  const { wins } = useGame();

  return (
    <section>
      <header>
        <h2 className="text-2xl">Score</h2>
      </header>
      <div className="flex justify-between text-lg">
        <div>{playerEmoji(1)}</div>
        <div>{wins[1]}</div>
      </div>
      <div className="flex justify-between text-lg">
        <div>{playerEmoji(2)}</div>
        <div>{wins[2]}</div>
      </div>
    </section>
  );
};
