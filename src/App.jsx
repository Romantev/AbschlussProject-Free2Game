import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import RecentlyAdded from "./pages/RecentlyAdded/RecentlyAdded";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recently-added" element={<RecentlyAdded />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
