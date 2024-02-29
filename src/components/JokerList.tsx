import { arrayMove } from '@dnd-kit/sortable';
import { useCallback } from 'react';
import { Board } from '../logics/Board';
import { DndList } from './DndList';
import { JokerRow } from './JokerRow';

export function JokerList({ board, onChangeBoard, className }: {
  board: Board;
  onChangeBoard: (board: Board) => void;
  className?: string;
}) {
  const onJokerDragEnd = useCallback((oldIndex: number, newIndex: number) => {
    const newBoard = board.clone();
    newBoard.jokers = arrayMove(newBoard.jokers, oldIndex, newIndex);

    onChangeBoard(newBoard);
  }, [board, onChangeBoard]);

  const handleClickPlus = useCallback(() => {
    const newBoard = board.clone();

    const index = newBoard.jokers.length - 1;
    const newPlayingCard = newBoard.jokers[index].clone();
    newBoard.jokers.push(newPlayingCard);

    onChangeBoard(newBoard);
  }, [board, onChangeBoard]);

  const handleClickMinus = useCallback(() => {
    const newBoard = board.clone();

    newBoard.jokers.pop();

    onChangeBoard(newBoard);
  }, [board, onChangeBoard]);

  return <div className={className}>
    <DndList
      items={board.jokers}
      renderItem={(joker, handleProps) => <JokerRow
        board={board}
        joker={joker}
        onChangeBoard={onChangeBoard}
        handleProps={handleProps}
      />}
      onDragEnd={onJokerDragEnd}
      className="flex flex-col gap-1"
    />
    <div className="flex mt-2 gap-1">
      <button
        className="w-6 h-6 bg-gray-800 rounded"
        onClick={handleClickPlus}
      >+</button>
      <button
        className="w-6 h-6 bg-gray-800 rounded"
        onClick={handleClickMinus}
      >-</button>
    </div>
  </div>;
}
