import "./Header.css";
import headerHomeImg from "../../assets/Header/header-home.png";

const Header = (props) => {
  return (
    <div className="header-home">
      <div
        className={
          props.page === "home"
            ? "header-img-home"
            : props.page === "allgames"
            ? "header-img-allgames"
            : props.page === "recentlyadded"
            ? "header-img-recentlyadded"
            : null
        }
      >
        <div className="header-title">
          <h1>
            {props.page === "home"
              ? "FIND & TRACK THE BEST FREE-TO-PLAY GAMES!"
              : props.page === "allgames"
              ? "ALL GAMES"
              : props.page === "recentlyadded"
              ? "RECENTLY ADDED"
              : null}
          </h1>

        </div>
      </div>
    </div>
  );
};

export default Header;
