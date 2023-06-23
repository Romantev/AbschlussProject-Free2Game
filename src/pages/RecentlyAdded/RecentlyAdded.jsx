import "./RecentlyAdded.css";

import { useContext, useEffect, useState } from "react";
import { headerImgContext } from "../../context/Context";

import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import GameCardSmall from "../../components/GameCardSmall/GameCardSmall";
import NavBar from "../../components/NavBar/NavBar";
import BtnShowAllGames from "../../components/BtnShowAllGames/BtnShowAllGames";

const RecentlyAdded = () => {
  const { headerImg, setHeaderImg } = useContext(headerImgContext);
  const [gameData, setGameData] = useState([]);
  const [showAllGames, setShowAllGames] = useState(false);

  //* ============ Set Header Img for Page ============ //
  useEffect(() => {
    setHeaderImg("recentlyadded");
  }, []);

  //* ============ Fetch for Data sorted after release date ============ //
  useEffect(() => {
    fetch("https://www.freetogame.com/api/games?sort-by=release-date")
      .then((response) => response.json())
      .then((data) => {
        setGameData(data);
      })
      .catch((error) => console.log("Fehlermeldung: ", error));
  }, []);

  //* ============ Show more Games ============ //
  useEffect(() => {
    setShowAllGames(false);
  }, []);

  const showMoreGames = () => {
    setShowAllGames(true);
  };

  return (
    <div className="super-wrapper">
      <Menu />
      <div className="wrapper">
        <NavBar />
        <Header page={headerImg} />

        <main className="cards-container-flex">
          {gameData?.slice(0, 8).map((elm, index) => {
            return <GameCardSmall key={index} game={elm} />;
          })}
          {showAllGames
            ? gameData?.slice(8, undefined).map((elm, index) => {
                return <GameCardSmall key={index} game={elm} />;
              })
            : null}
        </main>
        <BtnShowAllGames function={showMoreGames} />
      </div>
    </div>
  );
};

export default RecentlyAdded;
