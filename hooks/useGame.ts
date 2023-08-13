import { Player } from '@/lib/types';
import React from 'react';

const STARTING_PLAYER = 1;

export const useGame = () => {
  const [player, setPlayer] = React.useState<Player>(STARTING_PLAYER);

  const togglePlayer = () => {
    setPlayer((player) => (player === 1 ? 2 : 1));
  };

  return { player, togglePlayer };
};
