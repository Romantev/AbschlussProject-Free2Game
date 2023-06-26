import { Link } from "react-router-dom";
import "./GameCardLarge.css";
import "../GameCardSmall/GameCardSmall.css";
import { useEffect, useState } from "react";
import Windows from "../../assets/Platforms/Windows.svg";
import Browser from "../../assets/Platforms/Browser.svg";

const GameCardLarge = (props) => {
  const [imgBig, setImgBig] = useState();
  useEffect(() => {
    fetch(`https://www.freetogame.com/api/game?id=${props.game.id}`)
      .then((response) => response.json())
      .then((data) => {
        setImgBig(data.screenshots[0].image);
      })
      .catch((error) => console.log("Fehlermeldung: ", error));
  }, []);

  const cardLgStyle = {
    backgroundImage: `url(${imgBig})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
  };

  return (
    <div className="card-lg">
      <div className="card-content">
        <div className="upper-card-content">
          <div className="wrap-img-circle">
            <div className="top-counter-circle">{props.position}</div>
            <div className="card-img" style={cardLgStyle}>
              <div className="lower-card-content">
                <span className="card-title">{props.game.title} </span>
                <Link to={`/${props.game.id}`}>
                  <button className="main-btn">Read more</button>
                </Link>
                <div className="row">
                  <span className="card-genre-and-platform">
                    {props.game.platform === "PC (Windows)" ? (
                      <img src={Windows} alt={props.game.title} />
                    ) : (
                      <img src={Browser} alt={props.game.title} />
                    )}
                  </span>
                  <span className="card-genre-and-platform">
                    {props.game.genre}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCardLarge;
