const GameStatus = ({ gameWon, turnsPlayed, isXNext }) => {
  function renderStatus() {
    console.log("inside renderStatus of GameStatus");

    if (gameWon) {
      const player = isXNext ? "O" : "X";
      const className = player === "O" ? "text-green" : "text-orange";
      return (
        <>
          <span className={className}>{player}</span> has won the game
        </>
      );
    } else {
      if (turnsPlayed < 9) {
        return (
          <>
            Your turn{" "}
            {isXNext ? (
              <span className="text-orange">X</span>
            ) : (
              <span className="text-green">O</span>
            )}
          </>
        );
      } else {
        return <>Game Draw</>;
      }
    }
  }

  return (
    <div>
      <h2>{renderStatus()}</h2>
    </div>
  );
};

export default GameStatus;
