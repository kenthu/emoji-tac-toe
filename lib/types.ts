export type Player = 1 | 2;

export type Cell = {
  player: Player | null;
};

export type Board = [[Cell, Cell, Cell], [Cell, Cell, Cell], [Cell, Cell, Cell]];

export type Row = 0 | 1 | 2;
export type Col = 0 | 1 | 2;
export type Position = { row: Row; col: Col };

export type PlayerEmojiMap = Record<Player, string>;
