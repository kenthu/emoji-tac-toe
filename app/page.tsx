'use client';

import React from 'react';
import { Toaster } from 'react-hot-toast';

import BoardView from '@/components/BoardView';
import { EmojiModal } from '@/components/EmojiModal';
import { NextRoundButton } from '@/components/NextRoundButton';
import { ResetScoresButton } from '@/components/ResetScoresButton';
import { Score } from '@/components/Score';
import { useSettings } from '@/lib/redux';

export default function Home() {
  const { loadFromLocalStorage } = useSettings();

  React.useEffect(() => {
    loadFromLocalStorage();
  }, [loadFromLocalStorage]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-y-3 p-7 sm:gap-y-4 sm:p-8">
      <div className="flex w-80 justify-between sm:w-96">
        <Score player={1} />
        <Score player={2} />
      </div>
      <div className="flex flex-col items-center justify-between">
        <div className="flex w-80 justify-between sm:w-96">
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
