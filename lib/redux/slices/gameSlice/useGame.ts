import React from 'react';

import { gameSlice } from './gameSlice';
import { getBoard, getCurrentPlayer, getWinner } from './selectors';
import { handleMove as handleMoveThunk } from './thunks';

import { useDispatch, useSelector } from '@/lib/redux';
import { Col, Row } from '@/lib/types';

export const useGame = () => {
  const dispatch = useDispatch();

  const board = useSelector(getBoard);
  const currentPlayer = useSelector(getCurrentPlayer);
  const winner = useSelector(getWinner);

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
    board,
    currentPlayer,
    handleMove,
    resetBoard,
    winner,
  };
};
