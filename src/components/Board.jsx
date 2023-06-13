import { useState } from "react";
import Square from "./Square";
import { isGameWon } from "../js/winner.js";

const Board = () => {
  console.log("entered inside Board");

  const [sqrArr, setSqrArr] = useState(Array(9).fill(null));
  const [isXNext, setNext] = useState(false);
  const player = isXNext ? "O" : "X";
  const gameWon = isGameWon(sqrArr);
  const statusMsg = gameWon
    ? `${player} has won the game`
    : `Your turn ${isXNext ? "X" : "O"}`;

  console.log("value returned by is gamewon ", gameWon);

  function onSquareClicked(pos) {
    if (sqrArr[pos] || gameWon) return;

    setSqrArr(() =>
      sqrArr.map((val, idx) => {
        if (idx === pos) return isXNext ? "X" : "O";
        return val;
      })
    );

    setNext(() => !isXNext);
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
      <div>
        <h2>{statusMsg}</h2>
      </div>
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
