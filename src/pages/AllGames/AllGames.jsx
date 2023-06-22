import "./AllGames.css";

import { useContext } from "react";
import { gameContext } from "../../context/Context";

import GameCardSmall from "../../components/GameCardSmall/GameCardSmall";
import Menu from "../../components/Menu/Menu";
import NavBar from "../../components/NavBar/NavBar";

const AllGames = () => {
  const { gameData, setGameData } = useContext(gameContext);
  return (
    <div className="super-wrapper">
      <Menu />
      <div className="wrapper">
        <NavBar />
        <main className="main-allgames">
          {gameData?.map((elm, index) => {
            return <GameCardSmall game={elm} key={index} />;
          })}
        </main>
      </div>
    </div>
  );
};

export default AllGames;
