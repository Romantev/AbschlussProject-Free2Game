import "./Home.css";

import { useContext, useEffect, useState } from "react";
import { gameContext, searchInputContext } from "../../context/Context";

import Menu from "../../components/Menu/Menu";
import NavBar from "../../components/NavBar/NavBar";
import GameCardSmall from "../../components/GameCardSmall/GameCardSmall";
import Header from "../../components/Header/Header";

import SectionRecentlyAdded from "../../components/SectionRecentlyAdded/SectionRecentlyAdded";
import SectionTop4PC from "../../components/SectionTop4PC/SectionTop4PC";
import SectionTop4Browser from "../../components/SectionTop4Browser/SectionTop4Browser";

const Home = () => {
  const { gameData, setGameData } = useContext(gameContext);
  const { searchInput, setSearchInput } = useContext(searchInputContext);

  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  //* ============ Set Date ============ //
  useEffect(() => {
    const monthArray = [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ];
    let date = new Date();
    let month = date.getMonth();
    setMonth(monthArray[month]);
    let year = date.getFullYear();
    setYear(year);
  }, []);

  //* ============ Search for Games ============ //
  const filteredData = gameData.filter((item) =>
    item.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <div className="super-wrapper">
        <Menu />
        <div className="main-body">
          <Header />
          //* ============ Check if Searching ============ //
          {searchInput.length > 0 ? (
            <div className="cards-container-flex">
              {filteredData?.map((game, index) => (
                <div className="card-md" key={index}>
                  <GameCardSmall game={game} />
                </div>
              ))}
            </div>
          ) : (
            //* ============ Main Body ============ //
            <main className="home-main">
              <SectionRecentlyAdded />
              <SectionTop4PC month={month} year={year} />
              <SectionTop4Browser month={month} year={year} />
            </main>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
