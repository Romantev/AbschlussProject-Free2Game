import "./DetailGame.css";

import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { headerImgContext } from "../../context/Context";
import Windows from "../../assets/Platforms/Windows.svg";
import Browser from "../../assets/Platforms/Browser.svg";
import Button from "../../components/Button/Button.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Menu from "../../components/Menu/Menu.jsx";

const DetailGame = () => {
  const { headerImg, setHeaderImg } = useContext(headerImgContext);
  const params = useParams();
  const [gameData, setGameData] = useState();

  //* ============ Set Header Img for Page ============ //
  useEffect(() => {
    setHeaderImg("detailgame");
  }, []);

  useEffect(() => {
    fetch(`https://www.freetogame.com/api/game?id=${params.gameid}`)
      .then((res) => res.json())
      .then((data) => {
        setGameData(data);
      })
      .catch((err) => {
        console.log("Fehler beim Laden", err);
      });
  }, [params]);

  return (
    <div className="details-wrapper">
      {gameData ? (
        <>
          <NavBar />
          <Menu />
          <section className="detail-game-section">
            <article className="header-img">
              <img
                src={gameData.screenshots[0].image}
                alt={gameData.title}
                className="topimg"
              />
              <img
                src={gameData.screenshots[0].image}
                alt={gameData.title}
                className="blurimg"
              />
            </article>
            <h2 className="game-title">{gameData.title}</h2>
            <article className="game-details">
              <div className="game-details-left">
                <div>
                  <img
                    src={gameData.thumbnail}
                    alt={gameData.title}
                    className="thumbnail"
                  />
                  <h3>
                    Plattform : {gameData.platform}
                    {gameData.platform == "Windows" ? (
                      <img
                        src={Windows}
                        alt={gameData.platform}
                        className="platform-icon"
                      />
                    ) : (
                      <img
                        src={Browser}
                        alt={gameData.platform}
                        className="platform-icon"
                      />
                    )}
                  </h3>
                  <h4 className="genre">{gameData.genre}</h4>
                  <Link to={gameData.game_url} target="_blank">
                    <Button btntext="Play Now" />
                  </Link>
                </div>
              </div>
              <div className="game-details-right">
                <h3>About</h3>
                <p>{gameData.description}</p>
              </div>
            </article>
            <article className="game-requirements">
              <div className="game-requirements-left">
                <div className="game-requirements-left-image">
                  {gameData.screenshots[1] && gameData.screenshots[1].image ? (
                    <img
                      src={gameData.screenshots[1].image}
                      alt={gameData.title}
                    />
                  ) : (
                    <div>
                      <h3>Keine weiteren Bilder vorhanden</h3>
                    </div>
                  )}
                </div>
                <div className="game-requirements-left-data">
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
              </div>
              <div className="game-requirements-right">
                <div className="game-requirements-right-image">
                  {gameData.screenshots[2] && gameData.screenshots[2].image ? (
                    <img
                      src={gameData.screenshots[2].image}
                      alt={gameData.title}
                    />
                  ) : (
                    <div>
                      <h3>Keine weiteren Bilder vorhanden</h3>
                    </div>
                  )}
                </div>
                <div className="game-requirements-right-data">
                  <h3>Minimum System Requirements (Windows)</h3>
                  <div className="data-wrapper">
                    {gameData.minimum_system_requirements ? (
                      <>
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
                          <p>
                            {gameData.minimum_system_requirements.processor}
                          </p>
                          <h4>Graphics</h4>
                          <p>{gameData.minimum_system_requirements.graphics}</p>
                          <h4>Additional Notes</h4>
                          <p>Specifications may change during development</p>
                        </div>
                      </>
                    ) : (
                      <h4>Browser Game, no Installation needed</h4>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </section>
        </>
      ) : (
        <h2>Daten werden geladen</h2>
      )}
    </div>
  );
};

export default DetailGame;
