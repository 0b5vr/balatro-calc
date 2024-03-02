import { ChangeEvent, KeyboardEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { Board } from '../logics/Board';
import { PlayingCard } from '../logics/PlayingCard';
import { validateRank } from '../logics/validations/validateRank';
import { validateSuit } from '../logics/validations/validateSuit';
import { Rank } from '../logics/Rank';
import { Suit } from '../logics/Suit';
import { Enhancement } from '../logics/Enhancement';
import { Edition } from '../logics/Edition';
import { Seal } from '../logics/Seal';

export function PlayingCardRow({board, playingCard, onChangeBoard, handleProps}: {
  board: Board;
  playingCard: PlayingCard;
  onChangeBoard: (board: Board) => void;
  handleProps: Record<string, unknown>;
}) {
  const [rankSuitInputValue, setRankSuitInputValue] = useState(`${playingCard.rank}${playingCard.suit}`);

  useEffect(() => {
    setRankSuitInputValue(`${playingCard.rank}${playingCard.suit}`);
  }, [playingCard]);

  const cardIndex = useMemo(() => (
    board.playingCards.findIndex((card) => card.id === playingCard.id)
  ), [board.playingCards, playingCard.id]);

  const handleChangeSelected = useCallback(() => {
    const newBoard = board.clone();
    const newPlayingCard = playingCard.clone();

    newPlayingCard.selected = !playingCard.selected;

    newBoard.playingCards[cardIndex] = newPlayingCard;
    onChangeBoard(newBoard);
  }, [board, cardIndex, onChangeBoard, playingCard]);

  const handleChangeRankSuit = useCallback((event: ChangeEvent) => {
    const value = (event.target as HTMLInputElement).value;
    setRankSuitInputValue(value);
  }, []);

  const handleBlurRankSuit = useCallback(() => {
    const newBoard = board.clone();
    const newPlayingCard = playingCard.clone();

    const value = rankSuitInputValue;

    let rank: Rank = 'A';
    const rankCand = value[0]?.toUpperCase() ?? '';
    if (validateRank(rankCand)) { rank = rankCand; }

    let suit: Suit = 's';
    const suitCand = value[1]?.toLowerCase() ?? '';
    if (validateSuit(suitCand)) { suit = suitCand; }

    newPlayingCard.rank = rank;
    newPlayingCard.suit = suit;

    newBoard.playingCards[cardIndex] = newPlayingCard;
    onChangeBoard(newBoard);
  }, [board, cardIndex, onChangeBoard, playingCard, rankSuitInputValue]);

  const handleKeyDownRankSuit = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleBlurRankSuit();
    }
  }, [handleBlurRankSuit]);

  const handleChangeEnhancement = useCallback((event: ChangeEvent) => {
    const newBoard = board.clone();
    const newPlayingCard = playingCard.clone();

    newPlayingCard.enhancement = (event.target as HTMLSelectElement).value as ('' | Enhancement);

    newBoard.playingCards[cardIndex] = newPlayingCard;
    onChangeBoard(newBoard);
  }, [board, cardIndex, onChangeBoard, playingCard]);

  const handleChangeEdition = useCallback((event: ChangeEvent) => {
    const newBoard = board.clone();
    const newPlayingCard = playingCard.clone();

    newPlayingCard.edition = (event.target as HTMLSelectElement).value as ('' | Edition);

    newBoard.playingCards[cardIndex] = newPlayingCard;
    onChangeBoard(newBoard);
  }, [board, cardIndex, onChangeBoard, playingCard]);

  const handleChangeSeal = useCallback((event: ChangeEvent) => {
    const newBoard = board.clone();
    const newPlayingCard = playingCard.clone();

    newPlayingCard.seal = (event.target as HTMLSelectElement).value as ('' | Seal);

    newBoard.playingCards[cardIndex] = newPlayingCard;
    onChangeBoard(newBoard);
  }, [board, cardIndex, onChangeBoard, playingCard]);

  const handleChangeDebuffed = useCallback((event: ChangeEvent) => {
    const newBoard = board.clone();
    const newPlayingCard = playingCard.clone();

    newPlayingCard.debuffed = (event.target as HTMLSelectElement).value === 'true';

    newBoard.playingCards[cardIndex] = newPlayingCard;
    onChangeBoard(newBoard);
  }, [board, cardIndex, onChangeBoard, playingCard]);

  return (
    <div className="flex gap-1 p-1 bg-gray-800 rounded cursor-default">
      <div
        {...handleProps}
        className="relative top-[1px] px-1 opacity-20 cursor-ns-resize hover:bg-white/50 rounded"
      >⠿</div>
      <input
        type="checkbox"
        checked={playingCard.selected}
        onChange={handleChangeSelected}
        className="w-4 h-4 m-1"
      />
      <input
        type="text"
        value={rankSuitInputValue}
        onChange={handleChangeRankSuit}
        onBlur={handleBlurRankSuit}
        onKeyDown={handleKeyDownRankSuit}
        className="w-10 px-1 bg-gray-700 rounded"
      />
      <select
        value={playingCard.enhancement}
        onChange={handleChangeEnhancement}
        className="w-6 text-center bg-gray-700 rounded appearance-none"
      >
        <option value=""></option>
        <option value="Bonus">🔼</option>
        <option value="Mult">🎀</option>
        <option value="Wild">🎨</option>
        <option value="Glass">🪟</option>
        <option value="Steel">🔩</option>
        <option value="Stone">🪨</option>
        <option value="Gold">💰</option>
        <option value="Lucky">🍀</option>
      </select>
      <select
        value={playingCard.edition}
        onChange={handleChangeEdition}
        className="w-6 text-center bg-gray-700 rounded appearance-none"
      >
        <option value=""></option>
        <option value="Foil">💿</option>
        <option value="Holographic">💎</option>
        <option value="Polychrome">🌈</option>
      </select>
      <select
        value={playingCard.seal}
        onChange={handleChangeSeal}
        className="w-6 text-center bg-gray-700 rounded appearance-none"
      >
        <option value=""></option>
        <option value="GoldSeal">🟡</option>
        <option value="RedSeal">🔴</option>
        <option value="BlueSeal">🔵</option>
        <option value="PurpleSeal">🟣</option>
      </select>
      <select
        value={`${playingCard.debuffed}`}
        onChange={handleChangeDebuffed}
        className="w-6 text-center bg-gray-700 rounded appearance-none"
      >
        <option value="false"></option>
        <option value="true">❌</option>
      </select>
    </div>
  );
}
