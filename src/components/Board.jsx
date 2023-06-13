import { useState } from "react";
import Square from "./Square";
import { isGameWon } from "../js/winner.js";
import GameStatus from "./GameStatus";

const Board = () => {
  console.log("entered inside Board");

  const [sqrArr, setSqrArr] = useState(Array(9).fill(null));
  const [isXNext, setNext] = useState(false);
  const [countTurn, setCountTurn] = useState(0);
  const gameWon = isGameWon(sqrArr);

  console.log("value returned by is game won ", gameWon);

  function onSquareClicked(pos) {
    if (sqrArr[pos] || gameWon) return;

    setSqrArr(() =>
      sqrArr.map((val, idx) => {
        if (idx === pos) return isXNext ? "X" : "O";
        return val;
      })
    );

    setNext(() => !isXNext);

    setCountTurn(countTurn + 1);
  }

  function renderSquare(pos) {
    return (
      <Square
        value={sqrArr[pos]}
        changeSqr={() => onSquareClicked(pos)}
      ></Square>
    );
  }

  return (
    <div className="board">
      <>
        <GameStatus
          gameWon={gameWon}
          turnsPlayed={countTurn}
          isXNext={isXNext}
        />
      </>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
