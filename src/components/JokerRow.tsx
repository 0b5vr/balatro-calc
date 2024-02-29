import { ChangeEvent, KeyboardEvent, useCallback, useMemo, useState } from 'react';
import { Board } from '../logics/Board';
import { Joker } from '../logics/Joker';
import { Edition } from '../logics/Edition';
import { JokerName } from '../logics/JokerName';
import { jokerBehaviors } from '../logics/evaluations/joker-behaviors/jokerBehaviors';
import { JokerBehavior } from '../logics/evaluations/joker-behaviors/JokerBehavior';

function JokerParam({joker, behavior, board, paramName, onChangeBoard}: {
  joker: Joker;
  behavior: JokerBehavior;
  board: Board;
  paramName: string;
  onChangeBoard: (board: Board) => void;
}) {
  const behaviorParamDef = behavior.params![paramName];
  const defaultValue = behaviorParamDef.default;

  const currentValue = joker.params[paramName] ?? defaultValue;

  const [inputValue, setInputValue] = useState(currentValue ?? defaultValue);

  const handleChange = useCallback((event: ChangeEvent) => {
    const value = (event.target as HTMLInputElement).value;
    setInputValue(value);
  }, []);

  const handleBlur = useCallback(() => {
    const valid = behaviorParamDef.validate?.(inputValue) ?? true;
    if (!valid) {
      setInputValue(currentValue);
      return;
    }

    const newBoard = board.clone();
    const newJoker = joker.clone();

    newJoker.params[paramName] = inputValue;

    newBoard.jokers[board.jokers.findIndex((card) => card.id === joker.id)] = newJoker;
    onChangeBoard(newBoard);
  }, [behaviorParamDef, inputValue, board, joker, paramName, onChangeBoard, currentValue]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleBlur();
    }
  }, [handleBlur]);

  return (
    <div className="flex gap-1 text-sm pl-2">
      <div>{behaviorParamDef?.label}:</div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className="w-10 px-1 bg-gray-700 rounded"
      />
    </div>
  )
}

export function JokerRow({board, joker, onChangeBoard, handleProps}: {
  board: Board;
  joker: Joker;
  onChangeBoard: (board: Board) => void;
  handleProps: Record<string, unknown>;
}) {
  const cardIndex = useMemo(() => (
    board.jokers.findIndex((card) => card.id === joker.id)
  ), [board.jokers, joker.id]);

  const behavior = useMemo(() => (
    joker.name !== '' ? jokerBehaviors[joker.name] : null
  ), [joker.name]);

  const handleChangeName = useCallback((event: ChangeEvent) => {
    const newBoard = board.clone();
    const newJoker = joker.clone();

    newJoker.name = (event.target as HTMLSelectElement).value as ('' | JokerName);

    newBoard.jokers[cardIndex] = newJoker;
    onChangeBoard(newBoard);
  }, [board, cardIndex, joker, onChangeBoard]);

  const handleChangeEdition = useCallback((event: ChangeEvent) => {
    const newBoard = board.clone();
    const newJoker = joker.clone();

    newJoker.edition = (event.target as HTMLSelectElement).value as ('' | Edition);

    newBoard.jokers[cardIndex] = newJoker;
    onChangeBoard(newBoard);
  }, [board, cardIndex, joker, onChangeBoard]);

  return (
    <div className="flex gap-1 p-1 items-center bg-gray-800 rounded cursor-default">
      <div className="flex gap-1">
        <div
          {...handleProps}
          className="relative top-[1px] px-1 opacity-20 cursor-ns-resize hover:bg-white/50 rounded"
        >⠿</div>
        <select
          value={joker.name}
          onChange={handleChangeName}
          className="w-40 px-1 bg-gray-700 rounded appearance-none"
        >
          <option value=""></option>
          {JokerName.map((name) => (
            <option key={name} value={name}>{jokerBehaviors[name].displayName ?? name}</option>
          ))}
        </select>
        <select
          value={joker.edition}
          onChange={handleChangeEdition}
          className="w-6 text-center bg-gray-700 rounded appearance-none"
        >
          <option value=""></option>
          <option value="Foil">💿</option>
          <option value="Holographic">💎</option>
          <option value="Polychrome">🌈</option>
        </select>
      </div>
      {behavior != null && Object.entries(behavior.params ?? {}).map(([paramName]) => (
        <JokerParam
          key={paramName}
          joker={joker}
          behavior={behavior}
          board={board}
          paramName={paramName}
          onChangeBoard={onChangeBoard}
        />
      ))}
    </div>
  );
}
