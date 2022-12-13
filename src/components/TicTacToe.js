import TicTacToeTile from "./TicTacToeTile";
import React, { useState } from "react";
import script from "./services/script";

function TicTacToe() {
  const [selectorType, setSelectorType] = useState(0);
  const [jogadas, setJogadas] = useState([, , , , , , , ,]);
  const [show, setShow] = useState('')

  return (
    <div className="w-screen h-screen bg-slate-900 flex justify-center items-center flex-col gap-3">
      <h1 className="text-white text-4xl mb-2">Tic tac toe</h1>
      <div className="flex gap-3">
        <div
          onClick={() => {
            script.selector(selectorType, setSelectorType, 0, jogadas);
          }}
        >
          <TicTacToeTile selectorType={selectorType}/>
        </div>
        <div
          onClick={() => {
            script.selector(selectorType, setSelectorType, 1, jogadas);
          }}
        >
          <TicTacToeTile selectorType={selectorType} />
        </div>
        <div
          onClick={() => {
            script.selector(selectorType, setSelectorType, 2, jogadas);
          }}
        >
          <TicTacToeTile selectorType={selectorType} />
        </div>
      </div>
      <div className="flex gap-3">
        <div
          onClick={() => {
            script.selector(selectorType, setSelectorType, 3, jogadas);
          }}
        >
          <TicTacToeTile selectorType={selectorType} />
        </div>
        <div
          onClick={() => {
            script.selector(selectorType, setSelectorType, 4, jogadas);
          }}
        >
          <TicTacToeTile selectorType={selectorType} />
        </div>
        <div
          onClick={() => {
            script.selector(selectorType, setSelectorType, 5, jogadas);
          }}
        >
          <TicTacToeTile selectorType={selectorType} />
        </div>
      </div>
      <div className="flex gap-3">
        <div
          onClick={() => {
            script.selector(selectorType, setSelectorType, 6, jogadas);
          }}
        >
          <TicTacToeTile selectorType={selectorType} />
        </div>
        <div
          onClick={() => {
            script.selector(selectorType, setSelectorType, 7, jogadas);
          }}
        >
          <TicTacToeTile selectorType={selectorType} />
        </div>
        <div
          onClick={() => {
            script.selector(selectorType, setSelectorType, 8, jogadas);
          }}
        >
          <TicTacToeTile selectorType={selectorType} />
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
