import React from 'react';

import { gameSlice } from './gameSlice';
import { getAreAllCellsOccupied, getBoard, getCurrentPlayer, getWinner } from './selectors';
import { handleMove as handleMoveThunk } from './thunks';

import { useDispatch, useSelector } from '@/lib/redux';
import { Col, Row } from '@/lib/types';

export const useGame = () => {
  const dispatch = useDispatch();

  const board = useSelector(getBoard);
  const currentPlayer = useSelector(getCurrentPlayer);
  const winner = useSelector(getWinner);
  const areAllCellsOccupied = useSelector(getAreAllCellsOccupied);

  const handleMove = React.useCallback(
    (row: Row, col: Col): void => {
      dispatch(handleMoveThunk(currentPlayer, row, col));
    },
    [currentPlayer, dispatch],
  );

  const resetBoard = React.useCallback(() => {
    dispatch(gameSlice.actions.resetBoard());
  }, [dispatch]);

  return {
    areAllCellsOccupied,
    board,
    currentPlayer,
    handleMove,
    resetBoard,
    winner,
  };
};
