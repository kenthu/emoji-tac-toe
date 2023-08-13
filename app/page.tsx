import { BoardView } from '@/components/BoardView';
import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BoardView />
      <div className="footer"></div>
    </main>
  );
}
