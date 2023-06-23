import { useContext } from "react";
import { gameContext } from "../../context/Context";
import DropDown from "../../components/DropDown/DropDown";
import Menu from "../../components/Menu/Menu";
import NavBar from "../../components/NavBar/NavBar";
import "./AllGames.css";
import GameCardSmall from "../../components/GameCardSmall/GameCardSmall";


const AllGames = () => {
  const { gameData, setGameData } = useContext(gameContext);
  console.log(gameData);

  return (
  <>
  <NavBar />
  <DropDown />
    <div className="cards">
      {gameData?.map((element, index) => {
        return (<GameCardSmall game={element} key={index}/>)
      })}
    </div>
  </>
  );
};

export default AllGames;
