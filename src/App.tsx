import { useCallback, useEffect, useState } from 'react';
import { Board } from './logics/Board.ts';
import { Joker } from './logics/Joker.ts';
import { evaluateBoard } from './logics/evaluations/evaluateBoard.ts';
import { PlayingCard } from './logics/PlayingCard.ts';
import { toDisplayNumber } from './utils/toDisplayNumber.ts';
import { BoardResult } from './logics/BoardResult.ts';
import { ResultLogs } from './components/ResultLogs.tsx';
import { PlayingCardList } from './components/PlayingCardList.tsx';
import { JokerList } from './components/JokerList.tsx';
import { HandAndLevel } from './components/HandAndLevel.tsx';

function App() {
  const [board, setBoard] = useState<Board>(new Board());
  const [result, setResult] = useState<BoardResult>({
    board,
    chips: 0,
    mults: 0,
    probability: 1,
    logs: [],
    conditions: [],
  });

  useEffect(() => {
    const newBoard = new Board();

    newBoard.playingCards = [
      PlayingCard.fromString('As,selected'),
      PlayingCard.fromString('Ks,selected'),
      PlayingCard.fromString('Qs,selected'),
      PlayingCard.fromString('Js,selected'),
      PlayingCard.fromString('Ts,selected'),
      PlayingCard.fromString('9s'),
      PlayingCard.fromString('8s'),
      PlayingCard.fromString('7s'),
    ];

    newBoard.jokers = [
      Joker.fromString('Joker'),
      Joker.fromString(''),
      Joker.fromString(''),
      Joker.fromString(''),
      Joker.fromString(''),
    ];

    setBoard(newBoard);
  }, []);

  const handleChangeFlint = useCallback(() => {
    const newBoard = board.clone();
    newBoard.isFlint = !board.isFlint;
    setBoard(newBoard);
  }, [board]);

  const handleChangePlasmaDeck = useCallback(() => {
    const newBoard = board.clone();
    newBoard.isPlasmaDeck = !board.isPlasmaDeck;
    setBoard(newBoard);
  }, [board]);

  // evaluate
  useEffect(() => {
    const result = evaluateBoard(board.clone());
    setResult(result);
  }, [board]);

  const handleChangeBoard = useCallback((board: Board) => {
    setBoard(board);
  }, []);

  return (
    <div className="mx-auto my-8 max-w-sm">
      <h1 className="text-4xl font-bold">balatro-calc</h1>
      <p className="text-sm text-gray-400">
        v1.0.0-k compatible I guess
      </p>
      <p className="text-sm text-gray-400">
        We are not responsible for any damage caused by using this tool. Play responsively and at your own risk.
      </p>

      <h2 className="text-2xl font-bold mt-4">Cards</h2>
      <PlayingCardList
        board={board}
        onChangeBoard={handleChangeBoard}
        className="my-2"
      />

      <h2 className="text-2xl font-bold mt-4">Jokers</h2>
      <JokerList
        board={board}
        onChangeBoard={handleChangeBoard}
        className="my-2"
      />

      <h2 className="text-2xl font-bold mt-4">Hand / Misc.</h2>
      <div className="flex flex-col gap-1 my-2">
        <HandAndLevel
          result={result}
          board={board}
          onChangeBoard={handleChangeBoard}
        />
        <div className="flex text-sm">
          <input
            type="checkbox"
            id="flint"
            checked={board.isFlint}
            onChange={handleChangeFlint}
            className="relative bottom-[1px]"
          />
          <label htmlFor="flint" className="ml-1">The Flint</label>
        </div>
        <div className="flex text-sm">
          <input
            type="checkbox"
            id="plasma-deck"
            checked={board.isPlasmaDeck}
            onChange={handleChangePlasmaDeck}
            className="relative bottom-[1px]"
          />
          <label htmlFor="plasma-deck" className="ml-1">Plasma deck</label>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-4">Score</h2>
      <div className="flex justify-between gap-1">
        <div className="flex-grow">
          Hand score: {toDisplayNumber(Math.floor(result.chips * result.mults))}
        </div>
        <div className="bg-blue-600 rounded w-20 px-1 text-right">
          {toDisplayNumber(result.chips)}
        </div>
        <div className="text-red-600">x</div>
        <div className="bg-red-600 rounded w-20 px-1">
          {toDisplayNumber(result.mults)}
        </div>
      </div>
      <div className="text-xs text-gray-400">
        Probability: {(result.probability * 100.0).toFixed(2)} %
      </div>
      <div className="text-xs text-gray-400">
        {result.conditions.map((condition, index) => (
          <div key={index}>* {condition}</div>
        ))}
      </div>
      <ResultLogs result={result} />
    </div>
  )
}

export default App;
