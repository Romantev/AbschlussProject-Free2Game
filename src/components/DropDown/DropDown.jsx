import React, { useState, useEffect } from 'react';
import './DropDown.css';

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
    setDropDown1(false);
    setDropDown2(false);
  };

  const toggleDropDown1 = () => {
    setDropDown1(!dropdown1);
    setDropDown2(false);
    setDropDown(false);
  };

  const toggleDropDown2 = () => {
    setDropDown2(!dropdown2);
    setDropDown(false);
    setDropDown1(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://www.freetogame.com/api/games');
      const jsonData = await response.json();
      setData(jsonData);

      const platformSet = new Set();
      const genreSet = new Set();

      jsonData.forEach((game) => {
        if (game.platform) {
          game.platform.split(',').forEach((platform) => {
            platformSet.add(platform.trim());
          });
        }

        if (game.genre) {
          game.genre.split(',').forEach((genre) => {
            genreSet.add(genre.trim());
          });
        }
      });

      setPlatforms(Array.from(platformSet));
      setGenres(Array.from(genreSet));
    } catch (error) {
      console.log('Error fetching data:', error);
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
    <div className='dropdown'>
      <div className='btns'>
      <button onClick={toggleDropDown} type="button">
        Platform {dropdown ? <img className='vector' src='./src/assets/Dropdown/Vector 6vector.png' alt='open' /> : <img src='./src/assets/Dropdown/Vector 6vector.png' alt='close' />}
      </button>
        {dropdown ?  (
          <div className={dropdown?'':'btns-none'}>
            {platforms.map((platform) => (
              <div className='checked' key={platform}>
                <input
                  type='checkbox'
                  value={platform}
                  onChange={(e) => console.log(e.target.value)}
                  id='checkbox1'
                />
                <label htmlFor='checkbox1'>{platform}</label>
              </div>
            ))}
          </div>
        ):null}
      </div>
      <div className='btns'>
        <button onClick={toggleDropDown1} type='button'>
          Genre/Tag {dropdown1 ? <img className='vector' src='./src/assets/Dropdown/Vector 6vector.png' alt='open' /> : <img src='./src/assets/Dropdown/Vector 6vector.png' alt='close' />}
      </button>
        {dropdown1 && (
          <div className={dropdown1?'':'btns-none'}>
            {genres.map((genre) => (
              <div className='checked' key={genre}>
                <input
                  type='checkbox'
                  value={genre}
                  onChange={(e) => console.log(e.target.value)}
                  id='checkbox2'
                />
                <label htmlFor='checkbox2'>{genre}</label>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='btns'>
        <button onClick={toggleDropDown2} type='button'>
          Sort By {dropdown2 ? <img className='vector' src='./src/assets/Dropdown/Vector 6vector.png' alt='open' /> : <img src='./src/assets/Dropdown/Vector 6vector.png' alt='close' />}
      </button>
        {dropdown2 && (
          <div className={dropdown2?'':'btns-none'}>
            <div className='checked'>
              <input
                type='checkbox'
                value='relevance'
                id='relevance'
                checked={sortBy.includes('relevance')}
                onChange={() => handleSortBy('relevance')}
              />
              <label htmlFor='relevance'>Relevance</label>
            </div>
            <div className='checkbox'>
              <input
                type='checkbox'
                value='alphabetical'
                id='alphabetical'
                checked={sortBy.includes('alphabetical')}
                onChange={() => handleSortBy('alphabetical')}
              />
              <label htmlFor='alphabetical'>Alphabetical</label>
            </div>
            <div className='checkbox'>
              <input
                type='checkbox'
                value='popularity'
                id='popularity'
                checked={sortBy.includes('popularity')}
                onChange={() => handleSortBy('popularity')}
              />
              <label htmlFor='popularity'>Popularity</label>
            </div>
            <div className='checkbox'>
              <input
                type='checkbox'
                value='release-date'
                id='release-date'
                checked={sortBy.includes('release-date')}
                onChange={() => handleSortBy('release-date')}
              />
              <label htmlFor='release-date'>Release Date</label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;

