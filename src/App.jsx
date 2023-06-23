import "./App.css";

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  gameContext,
  searchInputContext,
  headerImgContext,
  navMoveContext,
} from "./context/Context";

import Home from "./pages/Home/Home";
import RecentlyAdded from "./pages/RecentlyAdded/RecentlyAdded";
import DetailGame from "./pages/DetailGame/DetailGame";
import Allgames from "./pages/AllGames/AllGames";


function App() {
  const [gameData, setGameData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [headerImg, setHeaderImg] = useState("home");
  const [navBarMove, setNavBarMove] = useState(false);

  return (
    <>
      <navMoveContext.Provider value={{ navBarMove, setNavBarMove }}>
        <headerImgContext.Provider value={{ headerImg, setHeaderImg }}>
          <searchInputContext.Provider value={{ searchInput, setSearchInput }}>
            <gameContext.Provider value={{ gameData, setGameData }}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/recently-added" element={<RecentlyAdded />} />
                  <Route path="/:gameid" element={<DetailGame />} />
                  <Route path="/all-games" element={<Allgames />} />
                </Routes>
              </BrowserRouter>
            </gameContext.Provider>
          </searchInputContext.Provider>
        </headerImgContext.Provider>
      </navMoveContext.Provider>
    </>
  );
}

export default App;
