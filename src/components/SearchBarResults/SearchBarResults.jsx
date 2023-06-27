import "./SearchBarResults.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { searchInputContext } from "../../context/Context";

const SearchBarResults = (props) => {
  const { searchInput, setSearchInput } = useContext(searchInputContext);

  const linkfunction = () => {
    setSearchInput("");
  };

  return (
    <NavLink
      onClick={linkfunction}
      to={`/${props.game.id}`}
      className="search-game-result"
    >
      <img src={props.game.thumbnail} alt={props.game.title} />
      <div className="search-game-result-section">
        <h4>{props.game.title}</h4>
        <p>Genre: {props.game.genre}</p>
      </div>
    </NavLink>
  );
};

export default SearchBarResults;
