import { ChangeEvent, useCallback, useMemo } from 'react';
import { Board } from '../logics/Board';
import { BoardResult } from '../logics/BoardResult';
import { validateInteger } from '../logics/validations/validateInteger';
import { handDisplayNames } from '../logics/handDisplayNames';

export function HandAndLevel({result, board, onChangeBoard, className}: {
  result: BoardResult;
  board: Board;
  onChangeBoard: (board: Board) => void;
  className?: string;
}) {
  const hand = result.handResult?.hand;
  const handLevel = hand != null
    ? board.handLevels.get(hand) ?? 1
    : 0;

  const handDisplayName = useMemo(() => {
    if (hand == null) { return '----'; }
    return handDisplayNames[hand];
  }, [hand]);

  const handleChange = useCallback((event: ChangeEvent) => {
    if (hand == null) { return; }

    const newBoard = board.clone();

    const value = (event.target as HTMLInputElement).value;
    if (validateInteger(value)) {
      newBoard.handLevels.set(hand, parseInt(value, 10));
    }

    onChangeBoard(newBoard);
  }, [board, hand, onChangeBoard]);

  return (
    <div className={className}>
      <div className="flex gap-1">
        <div>{handDisplayName}</div>
        {hand && <>
          <div>
            lvl.
          </div>
          <input
            type="number"
            value={handLevel!}
            onChange={handleChange}
            className="w-12 px-1 bg-gray-700 rounded"
          />
        </>}
      </div>
    </div>
  );
}
