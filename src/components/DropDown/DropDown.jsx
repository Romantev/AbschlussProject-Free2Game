import "./DropDown.css";
import { useState, useEffect } from "react";

const DropDown = () => {
  const [dropdown, setDropDown] = useState(false);
  const [dropdown1, setDropDown1] = useState(false);
  const [dropdown2, setDropDown2] = useState(false);
  const [data, setData] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [genres, setGenres] = useState([]);
  const [sortBy, setSortBy] = useState([]);

  const toggleDropDown = () => {
    setDropDown(!dropdown);
  };

  const toggleDropDown1 = () => {
    setDropDown1(!dropdown1);
  };

  const toggleDropDown2 = () => {
    setDropDown2(!dropdown2);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://www.freetogame.com/api/games");
      const jsonData = await response.json();
      setData(jsonData);

      const platformSet = new Set();
      const genreSet = new Set();

      jsonData.forEach((game) => {
        if (game.platform) {
          game.platform.split(",").forEach((platform) => {
            platformSet.add(platform.trim());
          });
        }

        if (game.genre) {
          game.genre.split(",").forEach((genre) => {
            genreSet.add(genre.trim());
          });
        }
      });

      setPlatforms(Array.from(platformSet));
      setGenres(Array.from(genreSet));
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleSortBy = (value) => {
    if (sortBy.includes(value)) {
      setSortBy(sortBy.filter((option) => option !== value));
    } else {
      setSortBy([...sortBy, value]);
    }
  };

  return (
    <div className="dropdown">
      <div className="btns">
        <button onClick={toggleDropDown} type="button">
          Platform{" "}
          <img
            className="vector"
            src="./src/assets/Dropdown/Vector 6vector.png"
            alt="vector"
          />
        </button>
        {dropdown && (
          <div>
            {platforms.map((platform) => (
              <div key={platform}>
                <input
                  type="checkbox"
                  value={platform}
                  onChange={(e) => console.log(e.target.value)}
                />
                <label htmlFor="Text">{platform}</label>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="btns">
        <button onClick={toggleDropDown1} type="button">
          Genre/Tag{" "}
          <img
            className="vector"
            src="./src/assets/Dropdown/Vector 6vector.png"
            alt="vector"
          />
        </button>
        {dropdown1 && (
          <div>
            {genres.map((genre) => (
              <div key={genre}>
                <input
                  type="checkbox"
                  value={genre}
                  onChange={(e) => console.log(e.target.value)}
                />
                <label htmlFor="Text">{genre}</label>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="btns">
        <button onClick={toggleDropDown2} type="button">
          Sort By{" "}
          <img
            className="vector"
            src="./src/assets/Dropdown/Vector 6vector.png"
            alt="vector"
          />
        </button>
        {dropdown2 && (
          <div>
            <div>
              <input
                type="checkbox"
                value="relevance"
                checked={sortBy.includes("relevance")}
                onChange={() => handleSortBy("relevance")}
              />
              <label htmlFor="relevance">Relevance</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="alphabetical"
                checked={sortBy.includes("alphabetical")}
                onChange={() => handleSortBy("alphabetical")}
              />
              <label htmlFor="alphabetical">Alphabetical</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="popularity"
                checked={sortBy.includes("popularity")}
                onChange={() => handleSortBy("popularity")}
              />
              <label htmlFor="popularity">Popularity</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="release-date"
                checked={sortBy.includes("release-date")}
                onChange={() => handleSortBy("release-date")}
              />
              <label htmlFor="release-date">Release Date</label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
