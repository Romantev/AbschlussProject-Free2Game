import "./Home.css";

import { useContext, useEffect, useState } from "react";
import {
  gameContext,
  searchInputContext,
  headerImgContext,
  isLoadingContext,
  loadingAnimationContext,
} from "../../context/Context";

import Menu from "../../components/Menu/Menu";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import SectionRecentlyAdded from "../../components/SectionRecentlyAdded/SectionRecentlyAdded";
import SectionTop4PC from "../../components/SectionTop4PC/SectionTop4PC";
import SectionTop4Browser from "../../components/SectionTop4Browser/SectionTop4Browser";
import logo from "../../components/NavBar/logo.svg";

const Home = () => {
  const { gameData, setGameData } = useContext(gameContext);
  const { searchInput, setSearchInput } = useContext(searchInputContext);
  const { headerImg, setHeaderImg } = useContext(headerImgContext);
  const { loadingAnimation, setLoadingAnimation } = useContext(
    loadingAnimationContext
  );
  const { isLoading, setIsLoading } = useContext(isLoadingContext);

  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  //* ============ Loading Animation ============ //
  useEffect(() => {
    if (isLoading === true) setLoadingAnimation(true);
    setTimeout(() => {
      setLoadingAnimation(false);
    }, 3100);
    setIsLoading(false);
  }, []);

  //* ============ Set Header Img for Page ============ //
  useEffect(() => {
    setHeaderImg("home");
  }, []);

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
      {loadingAnimation ? (
        <div className="loading-screen">
          <div className="title-logo">
            <h1>Welcome to </h1>
            <img src={logo} alt="logo" />
          </div>
          <div id="loader">
            <div className="ls-particles ls-part-1"></div>
            <div className="ls-particles ls-part-2"></div>
            <div className="ls-particles ls-part-3"></div>
            <div className="ls-particles ls-part-4"></div>
            <div className="ls-particles ls-part-5"></div>
            <div className="lightsaber ls-left ls-green"></div>
            <div className="lightsaber ls-right ls-red"></div>
          </div>
        </div>
      ) : (
        <>
          <NavBar />
          <div className="super-wrapper">
            <Menu />
            <div className="main-body">
              <Header page={headerImg} />
              //* ============ Main Body ============ //
              <main className="home-main">
                <SectionRecentlyAdded />
                <SectionTop4PC month={month} year={year} />
                <SectionTop4Browser month={month} year={year} />
              </main>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
