import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import RecentlyAdded from "./pages/RecentlyAdded/RecentlyAdded";
import DetailGame from "./pages/DetailGame/DetailGame";
import { useState } from "react";
import { gameContext, searchInputContext } from "./context/Context";
import AllGames from "./pages/AllGames/AllGames";

function App() {
  const [gameData, setGameData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
    
      <searchInputContext.Provider value={{ searchInput, setSearchInput }}>
        <gameContext.Provider value={{ gameData, setGameData }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/allgames" element={<AllGames />} />
              <Route path="/recently-added" element={<RecentlyAdded />} />
              <Route path="/:gameid" element={<DetailGame />} />
            </Routes>
          </BrowserRouter>
        </gameContext.Provider>
      </searchInputContext.Provider>
    </>
  );
}

export default App;
