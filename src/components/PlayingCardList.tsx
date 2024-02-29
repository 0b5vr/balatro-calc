import { arrayMove } from '@dnd-kit/sortable';
import { useCallback } from 'react';
import { Board } from '../logics/Board';
import { DndList } from './DndList';
import { PlayingCardRow } from './PlayingCardRow';

export function PlayingCardList({ board, onChangeBoard, className }: {
  board: Board;
  onChangeBoard: (newBoard: Board) => void;
  className?: string;
}) {
  const onPlayingCardDragEnd = useCallback((oldIndex: number, newIndex: number) => {
    const newBoard = board.clone();
    newBoard.playingCards = arrayMove(newBoard.playingCards, oldIndex, newIndex);

    onChangeBoard(newBoard);
  }, [board, onChangeBoard]);

  const handleClickPlus = useCallback(() => {
    const newBoard = board.clone();

    const index = newBoard.playingCards.length - 1;
    const newPlayingCard = newBoard.playingCards[index].clone();
    newBoard.playingCards.push(newPlayingCard);

    onChangeBoard(newBoard);
  }, [board, onChangeBoard]);

  const handleClickMinus = useCallback(() => {
    const newBoard = board.clone();

    newBoard.playingCards.pop();

    onChangeBoard(newBoard);
  }, [board, onChangeBoard]);

  return <div className={className}>
    <DndList
      items={board.playingCards}
      renderItem={(playingCard, handleProps) => <PlayingCardRow
        board={board}
        playingCard={playingCard}
        onChangeBoard={onChangeBoard}
        handleProps={handleProps}
      />}
      onDragEnd={onPlayingCardDragEnd}
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
