const square = ({ value, changeSqr }) => {
  console.log("entered inside Square with value and function ", value);
  return (
    <div>
      <button type="button" className="square" onClick={changeSqr}>
        {value}
      </button>
    </div>
  );
};

export default square;
