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
  const { searchInput, setSearchInput } = useContext(searchInputContext);
  const { headerImg, setHeaderImg } = useContext(headerImgContext);
  const { gameData, setGameData } = useContext(gameContext);

  const [showAllGames, setShowAllGames] = useState(false);
  const [selectedData, setSelectedData] = useState([]);

  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedSortBy, setSelectedSortBy] = useState("");

  const [animateFadeIn, setAnimateFadeIn] = useState(false);

  //* ============ fetch if DropDown is selected ============ //
  useEffect(() => {
    fetchGames();
  }, [selectedPlatform, selectedGenre, selectedSortBy]);

  const fetchGames = () => {
    fetch(
      selectedPlatform
        ? `https://www.freetogame.com/api/games?platform=${selectedPlatform}`
        : selectedGenre
        ? `https://www.freetogame.com/api/games?category=${selectedGenre}`
        : selectedSortBy
        ? `https://www.freetogame.com/api/games?sort-by=${selectedSortBy}`
        : null
    )
      .then((response) => response.json())
      .then((data) => setSelectedData(data))
      .catch((error) => console.log("Fehlermeldung: ", error));
  };

  //* ============ Set Header Img for Page ============ //
  useEffect(() => {
    setHeaderImg("allgames");
  }, []);

  //* ============ Search for Games ============ //
  const filteredData =
    selectedData.length > 0
      ? selectedData.filter((item) =>
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

  //* ============ Check for Animation ============ //
  useEffect(() => {
    if (filteredData.length > 0) {
      setAnimateFadeIn(true);
      setTimeout(() => {
        setAnimateFadeIn(false);
      }, 300);
    }
  }, [selectedData]);

  return (
    <div className={`super-wrapper ${animateFadeIn ? "animate-fade-in" : ""}`}>
      <Menu />
      <NavBar />
      <div className="wrapper">
        <Header page={headerImg} />
        <DropDown
          platform={setSelectedPlatform}
          genre={setSelectedGenre}
          sortby={setSelectedSortBy}
        />

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
