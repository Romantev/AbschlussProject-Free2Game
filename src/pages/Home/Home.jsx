import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import Menu from "../../components/Menu/Menu";
import GameCardSmall from "../../components/GameCardSmall/GameCardSmall";
import { useContext } from "react";
import { gameContext, searchInputContext } from "../../context/Context";

const Home = () => {
  const { gameData, setGameData } = useContext(gameContext);
  const { searchInput, setSearchInput } = useContext(searchInputContext);

  console.log(searchInput);
  console.log(gameData);

  const filteredData = gameData.filter((item) =>
    item.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <Menu />
      <div className="cards-container-flex">
        {filteredData?.map((game, index) => (
          <div className="card-md" key={index}>
            <GameCardSmall game={game} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
