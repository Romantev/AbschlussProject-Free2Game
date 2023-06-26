import { useEffect, useState } from "react";
import "./SectionTop4Browser.css";
import GameCardSmall from "../GameCardSmall/GameCardSmall";
import { NavLink } from "react-router-dom";
import BtnShowMore from "../BtnShowMore/BtnShowMore";

const SectionTop4Browser = (props) => {
  const [top4Browser, setTop4Browser] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.freetogame.com/api/games?&platform=browser&sort-by=popularity`
    )
      .then((response) => response.json())
      .then((data) => setTop4Browser(data))
      .catch((error) => console.log("Fehlermeldung: ", error));
  }, []);

  return (
    <>
      {top4Browser[0]?.thumbnail &&
      top4Browser[1]?.thumbnail &&
      top4Browser[2]?.thumbnail &&
      top4Browser[3]?.thumbnail ? (
        <section className="section-recentlyadded">
          <h2 className="section-title">
            Top 4 Games for Browser in {props.month} {props.year}
          </h2>
          <article className="article-recentlyadded">
            <GameCardSmall game={top4Browser[0]} />
            <GameCardSmall game={top4Browser[1]} />
            <GameCardSmall game={top4Browser[2]} />
            <GameCardSmall game={top4Browser[3]} />
          </article>
          <div className="btn-right-bottom">
          <NavLink to="/all-games">
            <BtnShowMore />
          </NavLink>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default SectionTop4Browser;
