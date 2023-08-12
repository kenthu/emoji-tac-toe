'use client';

import React from 'react';

type CellState = 'player1' | 'player2' | null;
type BoardState = [
  [CellState, CellState, CellState],
  [CellState, CellState, CellState],
  [CellState, CellState, CellState],
];

const displayCell = (cellState: CellState): string => {
  switch (cellState) {
    case 'player1':
      // return '🐱';
      return '🤞🏼';
    case 'player2':
      // return '❤️';
      return '🌹';
    case null:
      return '';
  }
};

const FIRST_PLAYER = 'player1';

interface BoardStateProps {
  boardState: BoardState;
  handleClick: (row: 0 | 1 | 2, col: 0 | 1 | 2) => void;
}

const BoardState = ({ boardState, handleClick }: BoardStateProps): JSX.Element => {
  return (
    <table cellSpacing="2" border={10} className="text-xl">
      <tbody>
        <tr>
          <td onClick={() => handleClick(0, 0)}>{displayCell(boardState[0][0])}</td>
          <td onClick={() => handleClick(0, 1)}>{displayCell(boardState[0][1])}</td>
          <td onClick={() => handleClick(0, 2)}>{displayCell(boardState[0][2])}</td>
        </tr>
        <tr>
          <td onClick={() => handleClick(1, 0)}>{displayCell(boardState[1][0])}</td>
          <td onClick={() => handleClick(1, 1)}>{displayCell(boardState[1][1])}</td>
          <td onClick={() => handleClick(1, 2)}>{displayCell(boardState[1][2])}</td>
        </tr>
        <tr>
          <td onClick={() => handleClick(2, 0)}>{displayCell(boardState[2][0])}</td>
          <td onClick={() => handleClick(2, 1)}>{displayCell(boardState[2][1])}</td>
          <td onClick={() => handleClick(2, 2)}>{displayCell(boardState[2][2])}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default function Home() {
  const [boardState, setBoardState] = React.useState<BoardState>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const [currentPlayer, setCurrentPlayer] = React.useState<'player1' | 'player2'>(FIRST_PLAYER);

  const handleClick = (row: 0 | 1 | 2, col: 0 | 1 | 2): void => {
    setBoardState((boardState) => {
      const newBoardState: BoardState = [
        [...boardState[0]],
        [...boardState[1]],
        [...boardState[2]],
      ];
      newBoardState[row][col] = currentPlayer;
      return newBoardState;
    });

    setCurrentPlayer((currentPlayer) => (currentPlayer === 'player1' ? 'player2' : 'player1'));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BoardState boardState={boardState} handleClick={handleClick} />
      <div className="footer"></div>
    </main>
  );
}
