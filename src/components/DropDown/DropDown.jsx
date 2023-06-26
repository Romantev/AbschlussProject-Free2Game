import { useState } from "react";
import Arrow from "../../assets/Dropdown/Vector 6vector.png";
import "./DropDown.css";

const DropDown = (props) => {
  const [dropDownPlatform, setDropDownPlatform] = useState(false);
  const [dropDownGenre, setDropDownGenre] = useState(false);
  const [dropDownSortBy, setDropDownSortBy] = useState(false);

  const [selectedPlatfrom, setSelectedPlatfrom] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const dropDownFunctionPlatform = () => {
    setDropDownPlatform(!dropDownPlatform);
    setDropDownGenre(false);
    props.genre("");
    setDropDownSortBy(false);
    props.sortby("");
    setSelectedGenre("");
    setSelectedSort("");
  };
  const dropDownFunctionGenre = () => {
    setDropDownGenre(!dropDownGenre);
    setDropDownPlatform(false);
    props.platform("");
    setDropDownSortBy(false);
    props.sortby("");
    setSelectedPlatfrom("");
    setSelectedSort("");
  };
  const dropDownFunctionSortBy = () => {
    setDropDownSortBy(!dropDownSortBy);
    setDropDownPlatform(false);
    props.platform("");
    setDropDownGenre(false);
    props.genre("");
    setSelectedPlatfrom("");
    setSelectedGenre("");
  };

  const handlePlatformChange = (e) => {
    const { value } = e.target;
    setSelectedPlatfrom(value);
    props.platform(value);
    setDropDownPlatform(false);
  };

  const handleGenreChange = (e) => {
    const { value } = e.target;
    setSelectedGenre(value);
    props.genre(value);
    setDropDownGenre(false);
  };

  const handleSortChange = (e) => {
    const { value } = e.target;
    setSelectedSort(value);
    props.sortby(value);
    setDropDownSortBy(false);
  };

  return (
    <section className="dropdown-section">
      {/* //* =========== DropDown Platform =========== */}
      <article className="dropdown-1">
        <button onClick={dropDownFunctionPlatform}>
          {dropDownPlatform ? "Platform" : "Platform"}
          <img src={Arrow} alt="Arrow" className="arrow" />
        </button>
        <div className={dropDownPlatform ? "btn-show" : "btn-none"}>
          <div>
            <form>
              <div>
                <input
                  type="checkbox"
                  name="pc"
                  id="pc"
                  value="pc"
                  checked={selectedPlatfrom === "pc"}
                  onChange={handlePlatformChange}
                />
                <label htmlFor="pc">PC</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="browser"
                  id="browser"
                  value="browser"
                  checked={selectedPlatfrom === "browser"}
                  onChange={handlePlatformChange}
                />
                <label htmlFor="browser">Browser</label>
              </div>
            </form>
          </div>
        </div>
      </article>

      {/* //* =========== DropDown Genre =========== */}
      <article className="dropdown-2">
        <button onClick={dropDownFunctionGenre}>
          {dropDownGenre ? "Genre/Tag" : "Genre/Tag"}
          <img src={Arrow} alt="Arrow" className="arrow" />
        </button>
        <div className={dropDownGenre ? "btn-show" : "btn-none"}>
          <form>
            <div className="checknlabel">
              <input
                type="checkbox"
                name="mmorpg"
                value="mmorpg"
                checked={selectedGenre === "mmorpg"}
                onChange={handleGenreChange}
              />
              <label htmlFor="mmorpg">MMORPG</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="shooter"
                id="shooter"
                value="shooter"
                checked={selectedGenre === "shooter"}
                onChange={handleGenreChange}
              />
              <label htmlFor="shooter">Shooter</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="strategy"
                id="strategy"
                value="strategy"
                checked={selectedGenre === "strategy"}
                onChange={handleGenreChange}
              />
              <label htmlFor="strategy">Strategy</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="moba"
                id="moba"
                value="moba"
                checked={selectedGenre === "moba"}
                onChange={handleGenreChange}
              />
              <label htmlFor="moba">Moba</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="racing"
                value="racing"
                id="racing"
                checked={selectedGenre === "racing"}
                onChange={handleGenreChange}
              />
              <label htmlFor="racing">Racing</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="sports"
                id="sports"
                value="sports"
                checked={selectedGenre === "sports"}
                onChange={handleGenreChange}
              />
              <label htmlFor="sports">Sports</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="social"
                value="social"
                id="social"
                checked={selectedGenre === "social"}
                onChange={handleGenreChange}
              />
              <label htmlFor="social">Social</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="sandbox"
                id="sandbox"
                value="sandbox"
                checked={selectedGenre === "sandbox"}
                onChange={handleGenreChange}
              />
              <label htmlFor="sandbox">Sandbox</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="open-world"
                id="open-world"
                value="open-world"
                checked={selectedGenre === "open-world"}
                onChange={handleGenreChange}
              />
              <label htmlFor="open-world">Open-World</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="survival"
                id="survival"
                value="survival"
                checked={selectedGenre === "survival"}
                onChange={handleGenreChange}
              />
              <label htmlFor="survival">Survival</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="pvp"
                id="pvp"
                value="pvp"
                checked={selectedGenre === "pvp"}
                onChange={handleGenreChange}
              />
              <label htmlFor="pvp">PvP</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="pve"
                id="pve"
                value="pve"
                checked={selectedGenre === "pve"}
                onChange={handleGenreChange}
              />
              <label htmlFor="pve">PvE</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="pixel"
                value="pixel"
                id="pixel"
                checked={selectedGenre === "pixel"}
                onChange={handleGenreChange}
              />
              <label htmlFor="pixel">Pixel</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="turn-based"
                value="turn-based"
                id="turn-based"
                checked={selectedGenre === "turn-based"}
                onChange={handleGenreChange}
              />
              <label htmlFor="turn-based">Turn-Based</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="first-person"
                id="first-person"
                value="first-person"
                checked={selectedGenre === "first-person"}
                onChange={handleGenreChange}
              />
              <label htmlFor="first-person">First-Person</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="third-Person"
                id="third-Person"
                value="third-Person"
                checked={selectedGenre === "third-Person"}
                onChange={handleGenreChange}
              />
              <label htmlFor="third-Person">Ttop-downhird-Person</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="top-down"
                id="top-down"
                value="top-down"
                checked={selectedGenre === "top-down"}
                onChange={handleGenreChange}
              />
              <label htmlFor="top-down">Top-Down</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="card"
                id="card"
                value="card"
                checked={selectedGenre === "card"}
                onChange={handleGenreChange}
              />
              <label htmlFor="card">Card</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="battle-royale"
                id="battle-royale"
                value="battle-royale"
                checked={selectedGenre === "battle-royale"}
                onChange={handleGenreChange}
              />
              <label htmlFor="battle-royale">Battle-Royale</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="3d"
                value="3d"
                id="3d"
                checked={selectedGenre === "3d"}
                onChange={handleGenreChange}
              />
              <label htmlFor="3d">3D</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="2d"
                value="2d"
                id="2d"
                checked={selectedGenre === "2d"}
                onChange={handleGenreChange}
              />
              <label htmlFor="2d">2D</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="anime"
                value="anime"
                id="anime"
                checked={selectedGenre === "anime"}
                onChange={handleGenreChange}
              />
              <label htmlFor="anime">Anime</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="fantasy"
                value="fantasy"
                id="fantasy"
                checked={selectedGenre === "fantasy"}
                onChange={handleGenreChange}
              />
              <label htmlFor="fantasy">Fantasy</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="sci-fi"
                id="sci-fi"
                value="sci-fi"
                checked={selectedGenre === "sci-fi"}
                onChange={handleGenreChange}
              />
              <label htmlFor="sci-fi">Sci-Fi</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="fighting"
                value="fighting"
                id="fighting"
                checked={selectedGenre === "fighting"}
                onChange={handleGenreChange}
              />
              <label htmlFor="fighting">Fighting</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="action-rpg"
                id="action-rpg"
                value="action-rpg"
                checked={selectedGenre === "action-rpg"}
                onChange={handleGenreChange}
              />
              <label htmlFor="action-rpg">Action-RPG</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="action"
                id="action"
                value="action"
                checked={selectedGenre === "action"}
                onChange={handleGenreChange}
              />
              <label htmlFor="action">Action</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="horror"
                id="horror"
                value="horror"
                checked={selectedGenre === "horror"}
                onChange={handleGenreChange}
              />
              <label htmlFor="horror">Horror</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="tower-defense"
                id="tower-defense"
                value="tower-defense"
                checked={selectedGenre === "tower-defense"}
                onChange={handleGenreChange}
              />
              <label htmlFor="tower-defense">Tower-Defense</label>
            </div>
          </form>
        </div>
      </article>
      {/* //* =========== DropDown SortBy =========== */}
      <article className="dropdown-3">
        <button onClick={dropDownFunctionSortBy}>
          {dropDownSortBy ? "Sort by" : "Sort by"}
          <img src={Arrow} alt="Arrow" className="arrow" />
        </button>
        <div className={dropDownSortBy ? "btn-show" : "btn-none"}>
          <form>
            <div className="checknlabel">
              <input
                type="checkbox"
                name="relevance"
                value="relevance"
                id="relevance"
                checked={selectedSort === "relevance"}
                onChange={handleSortChange}
              />
              <label htmlFor="relevance">Relevance</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="alphabetical"
                id="alphabetical"
                value="alphabetical"
                checked={selectedSort === "alphabetical"}
                onChange={handleSortChange}
              />
              <label htmlFor="alphabetical">Alphabetical</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="popularity"
                id="popularity"
                value="popularity"
                checked={selectedSort === "popularity"}
                onChange={handleSortChange}
              />
              <label htmlFor="popularity">Popularity</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="release-date"
                value="release-date"
                id="release-date"
                checked={selectedSort === "release-date"}
                onChange={handleSortChange}
              />
              <label htmlFor="release-date">Release Date</label>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default DropDown;
