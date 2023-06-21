import "./RecentlyAdded.css";

import { useEffect, useState } from "react";

import Menu from "../../components/Menu/Menu";
import GameCardSmall from "../../components/GameCardSmall/GameCardSmall";

const RecentlyAdded = () => {
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    fetch("https://www.freetogame.com/api/games?sort-by=release-date")
      .then((response) => response.json())
      .then((data) => {
        setGameData(data);
      })
      .catch((error) => console.log("Fehlermeldung: ", error));
  }, []);

  return (
    <div className="super-wrapper">
      <Menu />
      <main className="recently-added">
        {gameData?.map((elm, index) => {
          return <GameCardSmall key={index} game={elm} />;
        })}
      </main>
    </div>
  );
};

export default RecentlyAdded;
