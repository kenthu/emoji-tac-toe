'use client';

import BoardView from '@/components/BoardView';
import { STARTING_PLAYER } from '@/lib/constants';
import type { Board, Player } from '@/lib/types';
import { winnerForBoard } from '@/lib/winner';
import React from 'react';

export default function Home() {
  const [board, setBoard] = React.useState<Board>([
    [{ player: null }, { player: null }, { player: null }],
    [{ player: null }, { player: null }, { player: null }],
    [{ player: null }, { player: null }, { player: null }],
  ]);

  const [winner, setWinner] = React.useState<Player | null>(null);

  const [currentPlayer, setCurrentPlayer] = React.useState<Player>(STARTING_PLAYER);

  // Check if a player just won
  React.useEffect(() => {
    if (winner) return;
    const maybeWinner = winnerForBoard(board);
    if (maybeWinner) {
      setWinner(maybeWinner);
      alert(`Player ${maybeWinner} has won!`);
    }
  }, [winner, winnerForBoard, board, setWinner]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BoardView
        board={board}
        setBoard={setBoard}
        winner={winner}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
      />
      <div className="footer"></div>
    </main>
  );
}
