import { Link } from "react-router-dom";
import "./GameCardSmall.css";

const GameCardSmall = (props) => {
  return (
    <div className="card-md">
      <div className="upper-card-content">
      <img className="card-img" src={props.game.thumbnail} />
      <div className="card-content">
        <span className="card-title">{props.game.title} </span>
        <span className="card-description">
          {props.game.short_description}{" "}
        </span>
        </div>
        </div>
        
        <div className="lower-card-content">
        <Link to={`/${props.game.id}`}>
          <button className="main-btn">Read more</button>
        </Link>

        <hr className="card-line" />
        <div className="row">
          <span className="card-genre-and-platform">{props.game.platform}</span>
          <span className="card-genre-and-platform">{props.game.genre}</span>
        </div>
        </div>
      </div>
  );
};

export default GameCardSmall;
