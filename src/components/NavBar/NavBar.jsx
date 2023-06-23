import { useContext, useEffect } from "react";
import "./NavBar.css";
import logo from "./logo.svg";
import {
  gameContext,
  searchInputContext,
  navMoveContext,
} from "../../context/Context";
import SearchBarResults from "../SearchBarResults/SearchBarResults";

const NavBar = () => {
  const { searchInput, setSearchInput } = useContext(searchInputContext);
  const { gameData, setGameData } = useContext(gameContext);
  const { navBarMove, setNavBarMove } = useContext(navMoveContext);

  //* ============ Search for Games ============ //
  const filteredData = gameData.filter((item) =>
    item.title.toLowerCase().includes(searchInput.toLowerCase())
  );

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
      <div
        className={navBarMove ? "navbar-search-open" : "navbar-search-close"}
      >
        <img src={logo} alt="Logo" />
        <div className="searchbar">
          <input
            type="text"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <div className="search-results">
            {searchInput.length > 0
              ? filteredData?.map((elm, index) => {
                  return <SearchBarResults key={index} game={elm} />;
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
