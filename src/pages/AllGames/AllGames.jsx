import "./AllGames.css";

import { useContext } from "react";
import { gameContext, searchInputContext } from "../../context/Context";

import GameCardSmall from "../../components/GameCardSmall/GameCardSmall";
import Menu from "../../components/Menu/Menu";
import NavBar from "../../components/NavBar/NavBar";
import DropDown from "../../components/DropDown/DropDown";

const AllGames = () => {
  const { gameData, setGameData } = useContext(gameContext);
  const { searchInput, setSearchInput } = useContext(searchInputContext);

  //* ============ Search for Games ============ //
  const filteredData = gameData.filter((item) =>
    item.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <div className="super-wrapper">
        <Menu />
        <DropDown />
        <div className="wrapper">
          <main className="main-allgames">
            {filteredData?.map((elm, index) => {
              return <GameCardSmall game={elm} key={index} />;
            })}
          </main>
        </div>
      </div>
    </>
  );
};

export default AllGames;
