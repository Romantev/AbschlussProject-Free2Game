import "./App.css";

import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  gameContext,
  searchInputContext,
  headerImgContext,
  navMoveContext,
  loadingAnimationContext,
} from "./context/Context";

import Home from "./pages/Home/Home";
import RecentlyAdded from "./pages/RecentlyAdded/RecentlyAdded";
import DetailGame from "./pages/DetailGame/DetailGame";
import Allgames from "./pages/AllGames/AllGames";
import logo from "./components/NavBar/logo.svg";

function App() {
  const [gameData, setGameData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [headerImg, setHeaderImg] = useState("home");
  const [navBarMove, setNavBarMove] = useState(false);
  const [loadingAnimation, setLoadingAnimation] = useState(false);

  useEffect(() => {
    setLoadingAnimation(true);
    setTimeout(() => {
      setLoadingAnimation(false);
    }, 3050);
  }, []);

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
        <loadingAnimationContext.Provider
          value={{ loadingAnimation, setLoadingAnimation }}
        >
          <navMoveContext.Provider value={{ navBarMove, setNavBarMove }}>
            <headerImgContext.Provider value={{ headerImg, setHeaderImg }}>
              <searchInputContext.Provider
                value={{ searchInput, setSearchInput }}
              >
                <gameContext.Provider value={{ gameData, setGameData }}>
                  <BrowserRouter>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route
                        path="/recently-added"
                        element={<RecentlyAdded />}
                      />
                      <Route path="/:gameid" element={<DetailGame />} />
                      <Route path="/all-games" element={<Allgames />} />
                    </Routes>
                  </BrowserRouter>
                </gameContext.Provider>
              </searchInputContext.Provider>
            </headerImgContext.Provider>
          </navMoveContext.Provider>
        </loadingAnimationContext.Provider>
      )}
    </>
  );
}

export default App;
