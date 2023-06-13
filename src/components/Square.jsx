const square = ({ value, changeSqr }) => {
  console.log("entered inside Square with value and function ", value);
  return (
    <div>
      <button type="button" className="square" onClick={changeSqr}>
        <span className={value === "X" ? "text-orange" : "text-green"}>
          {value}
        </span>
      </button>
    </div>
  );
};

export default square;
