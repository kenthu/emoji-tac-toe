'use client';

import React from 'react';
import { Toaster } from 'react-hot-toast';

import BoardView from '@/components/BoardView';
import { EmojiModal } from '@/components/EmojiModal';
import { GameStatus } from '@/components/GameStatus';
import { SettingsControls } from '@/components/SettingsControls';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-y-8 p-8">
      <section className="flex w-96 justify-between">
        <GameStatus />
        <SettingsControls />
      </section>
      <BoardView />
      <EmojiModal />
      <Toaster />
    </main>
  );
}
