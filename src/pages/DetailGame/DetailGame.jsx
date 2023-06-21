import { useEffect, useState } from "react";
import "./DetailGame.css";

const DetailGame = () => {
  const [gameData, setGameData] = useState();

  useEffect(() => {
    fetch("https://www.freetogame.com/api/game?id=475")
      .then((res) => res.json())
      .then((data) => {
        setGameData(data);
      })
      .catch((err) => {
        console.log("Fehler beim Laden", err);
      });
  }, []);

  useEffect(() => {
    fetch("https://www.freetogame.com/api/games")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("Fehler beim Laden", err);
      });
  }, []);

  return (
    <div className="wrapper">
      {gameData ? (
        <section className="detail-game-section">
          <article className="header-img">
            <img src={gameData.screenshots[0].image} alt={gameData.title} />
          </article>
          <article className="game-details">
            <div className="game-details-left">
              <h2>{gameData.title}</h2>
              <div>
                <img src={gameData.thumbnail} alt={gameData.title} />
                <h3>Plattform : {gameData.platform}</h3>
                <h4 className="genre">{gameData.genre}</h4>
                <button>Play Now</button>
              </div>
            </div>
            <div className="game-details-right">
              <h3>About</h3>
              <p>{gameData.description}</p>
            </div>
          </article>
          <article className="game-requirements">
            <div className="game-requirements-images">
              <img src={gameData.screenshots[1].image} alt={gameData.title} />
              <img src={gameData.screenshots[2].image} alt={gameData.title} />
            </div>
            <div className="game-requirements-data">
              <div className="game-requirements-data-left">
                <h3>Additional Information</h3>
                <p>
                  Please note this free-to-play game may or may not offer
                  optional in-game purchases.
                </p>
                <div>
                  <h4>Developer</h4>
                  <p>{gameData.developer}</p>
                </div>
                <div>
                  <h4>Publisher</h4>
                  <p>{gameData.publisher}</p>
                </div>
                <div>
                  <h4>Release Date</h4>
                  <p>{gameData.release_date}</p>
                </div>
              </div>
              <div className="game-requirements-data-right">
                <h3>Minimum System Requirements (Windows)</h3>
                <div className="data-wrapper">
                  <div className="data-left">
                    <h4>OS</h4>
                    <p>{gameData.minimum_system_requirements.os}</p>
                    <h4>Memory</h4>
                    <p>{gameData.minimum_system_requirements.memory}</p>
                    <h4>Storage</h4>
                    <p>{gameData.minimum_system_requirements.storage}</p>
                  </div>
                  <div className="data-right">
                    <h4>Processor</h4>
                    <p>{gameData.minimum_system_requirements.processor}</p>
                    <h4>Graphics</h4>
                    <p>{gameData.minimum_system_requirements.graphics}</p>
                    <h4>Additional Notes</h4>
                    <p>Specifications may change during development</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      ) : (
        <h2>Lädt</h2>
      )}
    </div>
  );
};

export default DetailGame;
