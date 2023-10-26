'use client';

import React from 'react';
import { Toaster } from 'react-hot-toast';

import BoardView from '@/components/BoardView';
import { EmojiModal } from '@/components/EmojiModal';
import { NextRoundButton } from '@/components/NextRoundButton';
import { ResetScoresButton } from '@/components/ResetScoresButton';
import { Score } from '@/components/Score';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-y-4 p-8">
      <div className="flex w-96 justify-between">
        <Score player={1} />
        <Score player={2} />
      </div>
      <div className="flex flex-col items-center justify-between">
        <div className="flex w-96 justify-between">
          <NextRoundButton />
          <ResetScoresButton />
        </div>
        <BoardView />
      </div>
      <EmojiModal />
      <Toaster />
    </main>
  );
}
