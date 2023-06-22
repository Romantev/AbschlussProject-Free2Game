import "./GameCardMiddle.css";
import { Link } from "react-router-dom";
import "../GameCardSmall/GameCardSmall.css";

const GameCardMiddle = (props) => {
  return (
    <div className="card-md-hor">
      <div className="card-content">
        <div className="upper-card-content">
          <div className="wrap-img-circle">
            <div className="top-counter-circle">3</div>
            <img className="card-img" src={props.game.thumbnail} />
          </div>
        </div>

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
  );
}

export default GameCardMiddle;
