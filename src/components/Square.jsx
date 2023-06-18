const square = ({ value, changeSqr, isWinSqr, style }) => {
  console.log("entered inside Square with value and function ", value);
  const colrCls = value === "X" ? "text-green" : "text-orange";
  const winCls = isWinSqr ? "winning" : "";
  return (
    <div>
      <button
        type="button"
        className={`square ${colrCls} ${winCls}`}
        onClick={changeSqr}
        style={style}
      >
        {value}
      </button>
    </div>
  );
};

export default square;
