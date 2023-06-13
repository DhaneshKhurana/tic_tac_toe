export const isGameWon = (squares) => {
  const winPositions = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  for (const [a, b, c] of winPositions) {
    //console.log("inside for loop with a, b, c, ", a, b, c);
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c])
      return true;
  }
  return false;
};
