'use client';

import React from 'react';

import BoardView from '@/components/BoardView';
import { GameControls } from '@/components/GameControls';
import { Scoreboard } from '@/components/Scoreboard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GameControls />
      <Scoreboard />
      <BoardView />
      <div className="footer"></div>
    </main>
  );
}
