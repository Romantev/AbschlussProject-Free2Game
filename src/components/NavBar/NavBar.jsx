import { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "./logo.svg";
import GameCardSmall from "../GameCardSmall/GameCardSmall";

const NavBar = () => {
  const [games, setGames] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchedGames, setSearchedGames] = useState([]);

  const searchGames = () => {
    const searched = games.filter((game) =>
      game.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchedGames(searched);
  };

  useEffect(() => {
    fetch("https://www.freetogame.com/api/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    searchGames();
  }, [searchInput, games]);

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
      <div className="cards-container-flex">
        {searchedGames.map((game, index) => (
          <div className="card-md" key={index}><GameCardSmall game={game}/></div>
        ))}
        </div>
    </>
  );
};

export default NavBar;
