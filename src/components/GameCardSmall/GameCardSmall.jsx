import "./GameCardSmall.css";

const GameCardSmall = (props) => {
  return (
    <>
      <img className="card-img" src={props.game.thumbnail} />
      <div className="card-content">
        <span className="card-title">{props.game.title} </span>
        <span className="card-description">
          {props.game.short_description}{" "}
        </span>
        <button className="main-btn">Read more</button>
        <hr className="card-line" />
        <div className="row">
          <span className="card-genre-and-platform">
            {props.game.platform}
          </span>
          <span className="card-genre-and-platform">
          {props.game.genre}
          </span>

        </div>
      </div>
    </>
  );
};

export default GameCardSmall;
