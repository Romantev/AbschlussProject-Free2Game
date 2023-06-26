import "./SectionRecentlyAdded.css";
import { useContext, useState, useEffect } from "react";
import { gameContext } from "../../context/Context";
import GameCardSmall from "../GameCardSmall/GameCardSmall";
import { NavLink } from "react-router-dom";
import BtnShowMore from "../BtnShowMore/BtnShowMore";

const SectionRecentlyAdded = () => {
  const { gameData, setGameData } = useContext(gameContext);
  const [recentlyGames, setRecentlyGames] = useState([]);

  useEffect(() => {
    const sortedGames = [...gameData];
    sortedGames.sort(
      (a, b) => parseInt(b.release_date) - parseInt(a.release_date)
    );
    setRecentlyGames(sortedGames);
  }, [gameData]);

  return (
    <>
      {recentlyGames[0]?.thumbnail &&
      recentlyGames[1]?.thumbnail &&
      recentlyGames[2]?.thumbnail &&
      recentlyGames[3]?.thumbnail ? (
        <section className="section-recentlyadded">
          <h2 className="section-title">Recently Added</h2>
          <article className="article-recentlyadded">
            <GameCardSmall game={recentlyGames[0]} />
            <GameCardSmall game={recentlyGames[1]} />
            <GameCardSmall game={recentlyGames[2]} />
            <GameCardSmall game={recentlyGames[3]} />
          </article>
          <div className="btn-right-bottom">
          <NavLink to="/recently-added">
            <BtnShowMore />
          </NavLink>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default SectionRecentlyAdded;
