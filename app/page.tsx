'use client';

import React from 'react';

import BoardView from '@/components/BoardView';
import { GameControls } from '@/components/GameControls';
import { Scoreboard } from '@/components/Scoreboard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-y-8 p-8">
      <section className="flex w-96 justify-between">
        <GameControls />
        <Scoreboard />
      </section>
      <BoardView />
    </main>
  );
}
