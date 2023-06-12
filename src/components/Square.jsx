const square = ({ value }) => {
  console.log("entered inside Square");
  return (
    <div>
      <button type="button" className="square">
        {value}
      </button>
    </div>
  );
};

export default square;
