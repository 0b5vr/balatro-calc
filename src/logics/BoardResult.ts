import { Board } from './Board';
import { HandResult } from './HandResult';

export interface BoardResultLog {
  subject?: string;
  event: string;
  chips: number;
  mults: number;
  type?: string;
}

export interface BoardResult {
  board: Board;

  chips: number;
  mults: number;
  probability: number;

  handResult?: HandResult;

  logs: BoardResultLog[];

  conditions: string[];
}
