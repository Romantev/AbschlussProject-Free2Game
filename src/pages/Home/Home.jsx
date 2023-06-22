import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import Menu from "../../components/Menu/Menu";
import GameCardSmall from "../../components/GameCardSmall/GameCardSmall";
import { useContext } from "react";
import { gameContext, searchInputContext } from "../../context/Context";
import GameCardMiddle from "../../components/GameCardMiddle/GameCardMiddle";
import GameCardLarge from "../../components/GameCardLarge/GameCardLarge";

const Home = () => {
  const { gameData, setGameData } = useContext(gameContext);
  const { searchInput, setSearchInput } = useContext(searchInputContext);

  const filteredData = gameData.filter((item) =>
    item.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <Menu />
      <div className="cards-container-flex">
        <div className="test">
          {gameData[0]?.thumbnail ? <GameCardLarge game={gameData[0]} /> : ""}
          <div className="test-right">
          {gameData[0]?.thumbnail ? <GameCardMiddle game={gameData[1]} /> : ""}
          {gameData[0]?.thumbnail ? <GameCardMiddle game={gameData[2]} /> : ""}
          {gameData[0]?.thumbnail ? <GameCardMiddle game={gameData[3]} /> : ""}
          </div>

        </div>
        {filteredData?.map((game, index) => (
          <div key={index}>
            <GameCardSmall game={game} />
          </div>
        ))}
      </div>
     
    </>
  );
};

export default Home;
