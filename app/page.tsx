'use client';

import React from 'react';
import { Toaster } from 'react-hot-toast';

import BoardView from '@/components/BoardView';
import { EmojiModal } from '@/components/EmojiModal';
import { GameStatus } from '@/components/GameStatus';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-y-8 p-8">
      <section className="flex w-96 justify-start">
        <GameStatus />
      </section>
      <BoardView />
      <EmojiModal />
      <Toaster />
    </main>
  );
}
