/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import PlayersCard from "../PlayersCard/PlayersCard";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const Home = () => {
  const [searchedText, setSearchedText] = useState("");
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const searchText = (search) => {
    setSearchedText(search);
  };
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${searchedText}`
    )
      .then((res) => res.json())
      .then((data) => setPlayers(data.player));
  }, [searchedText]);

  return (
    <>
      <SearchBox searchText={searchText} />
      <div className="grid grid-cols-3 gap-1">
        <div className="grid col-span-2 border-2">
          <h1 className="text-center text-2xl font-semibold">
            Select your favorite player.
          </h1>
        </div>
        <div className="border-2">
          <h2 className="text-center text-2xl font-semibold">
            Selected Player
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1">
        <div className="border grid grid-cols-2 gap-3  col-span-2">
          {players &&
            players.map((player) => (
              <PlayersCard
                key={player.idPlayer}
                player={player}
                selectedPlayers={selectedPlayers}
                setSelectedPlayers={setSelectedPlayers}
              />
            ))}
        </div>
        <div className="border col-span-1 text-center w-full">
          <h2>Total selected: {selectedPlayers.length} </h2>
          {selectedPlayers &&
            selectedPlayers.map((selectedPlayer, index) => (
              <SelectedPlayer
                key={selectedPlayer.idPlayer}
                selectedPlayer={selectedPlayer}
                index={index}
              ></SelectedPlayer>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
