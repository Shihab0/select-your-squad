/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
const todays = new Date();
const year = todays.getFullYear();

const PlayersCard = (props) => {
  const {
    strPlayer,
    strThumb,
    dateBorn,
    strNationality,
    idPlayer,
    strDescriptionEN,
  } = props.player;
  const { selectedPlayers, setSelectedPlayers } = props;
  const [isSelected, setIsSelected] = useState(false);

  function handelSelect(selected) {
    if (!isSelected) {
      const selectPlayers = [...selectedPlayers, selected];
      setSelectedPlayers(selectPlayers);
      setIsSelected(true);
    }
  }
  return (
    <div
      className={`bg-white shadow-lg rounded-lg p-6 ${
        isSelected ? "opacity-70" : ""
      }`}
    >
      {strThumb ? (
        <img
          src={strThumb}
          alt={strPlayer}
          className="w-32 h-32 mx-auto rounded-full"
        />
      ) : (
        <img
          src="https://static.vecteezy.com/system/resources/previews/003/586/230/original/no-photo-sign-sticker-with-text-inscription-on-isolated-background-free-vector.jpg"
          className="w-32 h-32 mx-auto rounded-full"
        />
      )}
      <h2 className="mt-4 text-xl font-semibold text-gray-800">{strPlayer}</h2>
      <p className="text-gray-600">Country: {strNationality}</p>
      <p className="text-gray-600">Role: Batsman</p>
      <p className="text-gray-600">Age: {year - +dateBorn.slice(0, 4)}</p>
      <div className="mt-6">
        <button
          onClick={() => handelSelect(props.player)}
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full ${
            isSelected ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSelected}
        >
          {isSelected ? "Selected" : "Select"}
        </button>
      </div>
    </div>
  );
};

export default PlayersCard;
