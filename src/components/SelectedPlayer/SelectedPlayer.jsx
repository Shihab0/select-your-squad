/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

// eslint-disable-next-line react/prop-types
const SelectedPlayer = ({ selectedPlayer, index }) => {
  const { idPlayer, strPlayer } = selectedPlayer;
  const isEven = index % 2 === 0;

  return (
    <div>
      <h1
        className={`text-xl font-semibold border-b-2 ${
          isEven ? "bg-red-300" : "bg-green-300"
        }`}
      >
        {strPlayer}
      </h1>
    </div>
  );
};

export default SelectedPlayer;
