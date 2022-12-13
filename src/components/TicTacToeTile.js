import React, { useState } from "react";

function TicTacToeTile(props) {
  const [type, setType] = useState("");

  return (
    <div
      className={`w-32 h-32 border rounded-md transition-all flex justify-center items-center cursor-pointer hover:bg-slate-800 sm:w-16 h-16`}
      onClick={(e) => {
        e.target.className =
          "w-32 h-32 border rounded-md transition-all flex justify-center items-center pointer-events-none sm:w-16 h-16";
        {
          props.selectorType == 0 ? setType("X") : setType("O");
        }
      }}
    >
      <p className="text-6xl text-white font-light sm:text-2xl">{type}</p>
    </div>
  );
}

export default TicTacToeTile;
