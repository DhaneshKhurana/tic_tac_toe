import { useState } from "react";
import Square from "./Square";
import { isGameWon } from "../js/winner.js";
import GameStatus from "./GameStatus";
import { History } from "./History";

const Board = () => {
  console.log("entered inside Board");

  const [gameLog, setGameLog] = useState([
    { sqrArr: Array(9).fill(null), isXNext: false },
  ]);
  const [countTurn, setCountTurn] = useState(0);

  const { sqrArr, isXNext } = gameLog[countTurn];

  const { gameWon, winPos } = isGameWon(sqrArr);

  //console.log("value returned by is game won ", gameWon);

  function onSquareClicked(pos) {
    if (sqrArr[pos] || gameWon) return;

    setCountTurn((count) => count + 1);

    setGameLog(() => {
      const arr = [
        {
          sqrArr: sqrArr.map((val, idx) => {
            if (idx === pos) return isXNext ? "X" : "O";
            return val;
          }),
          isXNext: !isXNext,
        },
      ];
      return gameLog.concat(arr);
    });
  }

  function onHistoryClicked(idx) {
    //console.log("IN onHistoryClicked", idx);

    setCountTurn(idx);

    setGameLog(() => {
      const arr = [];
      for (let i = 0; i <= idx; i++) {
        arr.push(gameLog[i]);
      }
      return arr;
    });
  }

  function renderSquare(pos) {
    const styl =
      pos === 2 || pos === 5 || pos === 8 ? { borderRight: "none" } : {};
    return (
      <Square
        value={sqrArr[pos]}
        changeSqr={() => onSquareClicked(pos)}
        isWinSqr={winPos.includes(pos)}
        style={styl}
      />
    );
  }

  return (
    <div>
      <div>
        <GameStatus
          gameWon={gameWon}
          turnsPlayed={countTurn}
          isXNext={isXNext}
        />
      </div>
      <div className="board">
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
        <div className="board-row last-row" style={{ borderBottom: "none" }}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <div
          style={{
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <button
            type="button"
            onClick={() => onHistoryClicked(0)}
            className={`btn-reset ${gameWon || countTurn == 9 ? "active" : ""}`}
          >
            Start New Game
          </button>
        </div>
        <>
          <History logs={gameLog} historyClicked={onHistoryClicked} />
        </>
      </div>
    </div>
  );
};

export default Board;
