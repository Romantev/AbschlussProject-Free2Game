import "./NavBar.css";
import { useContext, useEffect } from "react";
import {
  gameContext,
  searchInputContext,
  navMoveContext,
  headerImgContext,
} from "../../context/Context";

import logo from "./logo.svg";
import SearchBarResults from "../SearchBarResults/SearchBarResults";
import SearchIcon from "./search-icon.png";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const { searchInput, setSearchInput } = useContext(searchInputContext);
  const { gameData, setGameData } = useContext(gameContext);
  const { navBarMove, setNavBarMove } = useContext(navMoveContext);
  const { headerImg, setHeaderImg } = useContext(headerImgContext);
  const location = useLocation();

  useEffect(() => {
    setNavBarMove(false);
  }, [location.pathname]);

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
      <nav className={navBarMove ? "navbar-open" : "navbar-close"}>
        <img src={logo} alt="Logo" className="logo" />
        <div className="searchbar">
          <input
            type="text"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <img src={SearchIcon} alt="search-icon" className="search-icon" />

          {headerImg == "allgames" ? null : headerImg ==
            "recentlyadded" ? null : (
            <div className="search-results">
              {searchInput.length > 0
                ? filteredData?.map((elm, index) => {
                    return <SearchBarResults key={index} game={elm} />;
                  })
                : null}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
