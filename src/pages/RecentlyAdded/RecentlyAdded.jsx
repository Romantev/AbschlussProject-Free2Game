import "./RecentlyAdded.css";

import { useContext, useEffect, useState } from "react";
import { headerImgContext, searchInputContext } from "../../context/Context";

import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import GameCardSmall from "../../components/GameCardSmall/GameCardSmall";
import NavBar from "../../components/NavBar/NavBar";
import BtnShowAllGames from "../../components/BtnShowAllGames/BtnShowAllGames";

const RecentlyAdded = () => {
  const { headerImg, setHeaderImg } = useContext(headerImgContext);
  const { searchInput, setSearchInput } = useContext(searchInputContext);

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

  //* ============ Search for Games ============ //
  const filteredData =
    gameData.length > 0
      ? gameData.filter((item) =>
          item.title.toLowerCase().includes(searchInput.toLowerCase())
        )
      : gameData.filter((item) =>
          item.title.toLowerCase().includes(searchInput.toLowerCase())
        );

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
      <NavBar />
      <div className="wrapper">
        <Header page={headerImg} />

        <main className="cards-container-flex">
          {filteredData?.slice(0, 8).map((elm, index) => {
            return <GameCardSmall key={index} game={elm} />;
          })}
          {showAllGames
            ? filteredData?.slice(8, undefined).map((elm, index) => {
                return <GameCardSmall key={index} game={elm} />;
              })
            : null}
          <div className="showAllGames">
            <BtnShowAllGames function={showMoreGames} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default RecentlyAdded;
