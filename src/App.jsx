import "./styles.scss";
import Board from "./components/Board";
import { useState } from "react";

function App() {
  // const [appVal, setAppVal] = useState(0);

  // console.log("entered inside App");

  // function btnClicked(event) {
  //   setAppVal(appVal + 1);
  // }

  return (
    <div className="app">
      <div>
        <Board></Board>
      </div>
    </div>
  );
}

export default App;
