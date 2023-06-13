const square = ({ value, changeSqr, isWinSqr }) => {
  console.log("entered inside Square with value and function ", value);
  const colrCls = value === "X" ? "text-green" : "text-orange";
  const winCls = isWinSqr ? "winning" : "";
  return (
    <div>
      <button
        type="button"
        className={`square ${colrCls} ${winCls}`}
        onClick={changeSqr}
      >
        {value}
      </button>
    </div>
  );
};

export default square;
