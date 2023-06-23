import "./SectionTop4PC.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GameCardLarge from "../GameCardLarge/GameCardLarge";
import GameCardMiddle from "../GameCardMiddle/GameCardMiddle";
import BtnShowMore from "../BtnShowMore/BtnShowMore";

const SectionTop4PC = (props) => {
  const [top4PC, setTop4Pc] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.freetogame.com/api/games?&platform=pc&sort-by=popularity`
    )
      .then((response) => response.json())
      .then((data) => {
        setTop4Pc(data);
      })
      .catch((error) => console.log("Fehlermeldung: ", error));
  }, []);

  return (
    <>
      {top4PC[0]?.thumbnail &&
      top4PC[1]?.thumbnail &&
      top4PC[2]?.thumbnail &&
      top4PC[3]?.thumbnail ? (
        <section className="section-recentlyadded">
          <h2 className="section-title">
            Top 4 Games for PC in {props.month} {props.year}
          </h2>
          <article className="article-recentlyadded">
            <GameCardLarge game={top4PC[0]} />
            <GameCardMiddle game={top4PC[1]} />
            <GameCardMiddle game={top4PC[2]} />
            <GameCardMiddle game={top4PC[3]} />
          </article>
          <NavLink to="/all-games">
            <BtnShowMore />
          </NavLink>
        </section>
      ) : null}
    </>
  );
};

export default SectionTop4PC;
