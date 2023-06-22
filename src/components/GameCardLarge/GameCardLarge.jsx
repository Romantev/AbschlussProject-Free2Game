import { Link } from "react-router-dom";
import "./GameCardLarge.css";
import "../GameCardSmall/GameCardSmall.css";

const GameCardLarge = (props) => {
  const cardLgStyle = {
    backgroundImage: `url(${props.game.thumbnail})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
 }
  return (
    <div className="card-lg">
      <div className="card-content">
        <div className="upper-card-content">
          <div className="wrap-img-circle">
            <div className="top-counter-circle">1</div>
            <div className="card-img" style={cardLgStyle}>
            <div className="lower-card-content">
          <span className="card-title">{props.game.title} </span>
          <Link to={`/${props.game.id}`}>
            <button className="main-btn">Read more</button>
          </Link>
          <div className="row">
            <span className="card-genre-and-platform">
              {props.game.platform}
            </span>
            <span className="card-genre-and-platform">{props.game.genre}</span>
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
