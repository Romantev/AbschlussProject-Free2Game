import { useState } from "react";
import Arrow from "../../assets/Dropdown/Vector 6vector.png";
import "./DropDown.css";

const DropDown = () => {
  const [dropDown1, setDropDown1] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  const [dropDown3, setDropDown3] = useState(false);
  const [selectedPlatfrom, setSelectedPlatfrom] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const dropDownFunction1 = () => {
    setDropDown1(!dropDown1);
    setDropDown2(false);
    setDropDown3(false);
  };
  const dropDownFunction2 = () => {
    setDropDown1(false);
    setDropDown2(!dropDown2);
    setDropDown3(false);
  };
  const dropDownFunction3 = () => {
    setDropDown1(false);
    setDropDown2(false);
    setDropDown3(!dropDown3);
  };

  const handlePlatformChange = (e) => {
    const { value } = e.target;
    setSelectedPlatfrom(value);
    console.log(value);
  };
  const handleGenreChange = (e) => {
    const { value } = e.target;
    setSelectedGenre(value);
    console.log(value);
  };
  const handleSortChange = (e) => {
    const { value } = e.target;
    setSelectedSort(value);
    console.log(value);
  };

  return (
    <section className="dropdown-section">
      <article className="dropdown-1">
        <button onClick={dropDownFunction1}>
          {dropDown1 ? "Close" : "Open"}
          <img src={Arrow} alt="Arrow" className="arrow" />
        </button>
        <div className={dropDown1 ? "btn-show" : "btn-none"}>
          <div>
            <form>
              <div>
                <input
                  type="checkbox"
                  name="pc"
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
      <article className="dropdown-2">
        <button onClick={dropDownFunction2}>
          {dropDown2 ? "Close" : "Open"}
          <img src={Arrow} alt="Arrow" className="arrow" />
        </button>
        <div className={dropDown2 ? "btn-show" : "btn-none"}>
          <form>
            <div>
              <input
                type="checkbox"
                name="shooter"
                value="shooter"
                checked={selectedGenre === "shooter"}
                onChange={handleGenreChange}
              />
              <label htmlFor="shooter">Shooter</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="mmoarpg"
                value="mmoarpg"
                checked={selectedGenre === "mmoarpg"}
                onChange={handleGenreChange}
              />
              <label htmlFor="mmoarpg">MMOARPG</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="arpg"
                value="arpg"
                checked={selectedGenre === "arpg"}
                onChange={handleGenreChange}
              />
              <label htmlFor="arpg">ARPG</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="strategy"
                value="strategy"
                checked={selectedGenre === "strategy"}
                onChange={handleGenreChange}
              />
              <label htmlFor="strategy">Strategy</label>
            </div>
            <div>
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
                name="fighting"
                value="fighting"
                checked={selectedGenre === "fighting"}
                onChange={handleGenreChange}
              />
              <label htmlFor="fighting">Fighting</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="action-rpg"
                value="action-rpg"
                checked={selectedGenre === "action-rpg"}
                onChange={handleGenreChange}
              />
              <label htmlFor="action-rpg">Action-RPG</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="battleroyale"
                value="battleroyale"
                checked={selectedGenre === "battleroyale"}
                onChange={handleGenreChange}
              />
              <label htmlFor="battleroyale">Battle-Royale</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="moba"
                value="moba"
                checked={selectedGenre === "moba"}
                onChange={handleGenreChange}
              />
              <label htmlFor="moba">MOBA</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="sports"
                value="sports"
                checked={selectedGenre === "sports"}
                onChange={handleGenreChange}
              />
              <label htmlFor="sports">Sports</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="racing"
                value="racing"
                checked={selectedGenre === "racing"}
                onChange={handleGenreChange}
              />
              <label htmlFor="racing">Racing</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="cardgame"
                value="cardgame"
                checked={selectedGenre === "cardgame"}
                onChange={handleGenreChange}
              />
              <label htmlFor="cardgame">Card-Game</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="mmo"
                value="mmo"
                checked={selectedGenre === "mmo"}
                onChange={handleGenreChange}
              />
              <label htmlFor="mmo">MMO</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="social"
                value="social"
                checked={selectedGenre === "social"}
                onChange={handleGenreChange}
              />
              <label htmlFor="social">Social</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="fantasy"
                value="fantasy"
                checked={selectedGenre === "fantasy"}
                onChange={handleGenreChange}
              />
              <label htmlFor="fantasy">Fantasy</label>
            </div>
          </form>
        </div>
      </article>
      <article className="dropdown-3">
        <button onClick={dropDownFunction3}>
          {dropDown3 ? "Close" : "Open"}
          <img src={Arrow} alt="Arrow" className="arrow" />
        </button>
        <div className={dropDown3 ? "btn-show" : "btn-none"}>
          <form>
            <div>
              <input
                type="checkbox"
                name="relevance"
                value="relevance"
                checked={selectedSort === "relevance"}
                onChange={handleSortChange}
              />
              <label htmlFor="relevance">Relevance</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="alphabetical"
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
                value="popularity"
                checked={selectedSort === "popularity"}
                onChange={handleSortChange}
              />
              <label htmlFor="popularity">Popularity</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="releasedate"
                value="releasedate"
                checked={selectedSort === "releasedate"}
                onChange={handleSortChange}
              />
              <label htmlFor="releasedate">Releasedate</label>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default DropDown;
