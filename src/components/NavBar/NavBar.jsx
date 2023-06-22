import { useContext, useEffect } from "react";
import "./NavBar.css";
import logo from "./logo.svg";
import { gameContext, searchInputContext } from "../../context/Context";

const NavBar = () => {
  const { searchInput, setSearchInput } = useContext(searchInputContext);
  const { gameData, setGameData } = useContext(gameContext);

  useEffect(() => {
    fetch("https://www.freetogame.com/api/games")
      .then((response) => response.json())
      .then((data) => {
        setGameData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="navbar-search">
        <img src={logo} alt="Logo" />
        <input
          type="text"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
      </div>
    </>
  );
};

export default NavBar;
