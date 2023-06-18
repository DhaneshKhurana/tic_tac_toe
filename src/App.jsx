import "./styles.scss";
import Board from "./components/Board";
//import { useState } from "react";

function App() {
  return (
    <div className="app">
      <h1>
        <span className="text-orange">Tic</span> Tac{" "}
        <span className="text-green">Toe</span>
      </h1>
      <div>
        <Board></Board>
      </div>
    </div>
  );
}

export default App;
