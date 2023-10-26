'use client';

import React from 'react';
import { Toaster } from 'react-hot-toast';

import BoardView from '@/components/BoardView';
import { EmojiModal } from '@/components/EmojiModal';
import { Score } from '@/components/Score';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-y-8 p-8">
      <section className="flex w-96 justify-between">
        <Score player={1} />
        <Score player={2} />
      </section>
      <BoardView />
      <EmojiModal />
      <Toaster />
    </main>
  );
}
