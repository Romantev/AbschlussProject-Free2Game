import "./AllGames.css";
import { useContext, useEffect, useState } from "react";
import {
  gameContext,
  searchInputContext,
  headerImgContext,
} from "../../context/Context";

import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import NavBar from "../../components/NavBar/NavBar";
import DropDown from "../../components/DropDown/DropDown";
import GameCardSmall from "../../components/GameCardSmall/GameCardSmall";
import BtnShowAllGames from "../../components/BtnShowAllGames/BtnShowAllGames";

const AllGames = () => {
  const { gameData, setGameData } = useContext(gameContext);
  const { searchInput, setSearchInput } = useContext(searchInputContext);
  const { headerImg, setHeaderImg } = useContext(headerImgContext);
  const [showAllGames, setShowAllGames] = useState(false);

  //* ============ Set Header Img for Page ============ //
  useEffect(() => {
    setHeaderImg("allgames");
  }, []);

  //* ============ Search for Games ============ //
  const filteredData = gameData.filter((item) =>
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
      <div className="wrapper">
        <NavBar />
        <Header page={headerImg} />
        <DropDown />
        <main className="main-allgames">
          {filteredData?.slice(0, 8).map((elm, index) => {
            return <GameCardSmall game={elm} key={index} />;
          })}
          {showAllGames
            ? filteredData?.slice(8, undefined).map((elm, index) => {
                return <GameCardSmall key={index} game={elm} />;
              })
            : null}
        </main>
        <BtnShowAllGames function={showMoreGames} />
      </div>
    </div>
  );
};

export default AllGames;
