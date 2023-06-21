import "./Menu.css";

import { useState } from "react";
import { NavLink } from "react-router-dom";

import BurgerIcon from "../../assets/svg/BurgerIcon";
import CloseIcon from "../../assets/svg/CloseIcon";
import HomeIcon from "../../assets/svg/HomeIcon";
import GamesIcon from "../../assets/svg/GamesIcon";
import RecentlyAddedIcon from "../../assets/svg/RecentlyAddedIcon";

const Menu = () => {
  const [menuBar, setMenuBar] = useState(false);

  const openMenuBar = () => {
    setMenuBar(true);
  };

  const closeMenuBar = () => {
    setMenuBar(false);
  };

  return (
    <>
      {menuBar ? (
        // MenuBar open //
        <div className="super-wrapper">
          <div className="menu-bar-open">
            <button onClick={closeMenuBar} className="menu-button-close">
              <CloseIcon />
            </button>
            <div className="menu-navigation">
              <button className="menu-button">
                <div>
                  <HomeIcon />
                  <h2>Home</h2>
                </div>
              </button>
              <button className="menu-button">
                <div>
                  <GamesIcon />
                  <h2>All Games</h2>
                </div>
              </button>
              <button className="menu-button">
                <div>
                  <RecentlyAddedIcon />
                  <h2>Recenty Added</h2>
                </div>
              </button>
            </div>
          </div>
          <main></main>
        </div>
      ) : (
        // MenuBar closed //
        <div className="super-wrapper">
          <div className="menu-bar-close">
            <button onClick={openMenuBar} className="menu-button">
              <BurgerIcon />
            </button>
            <div className="menu-navigation">
              <NavLink to="/" className="menu-button">
                <HomeIcon />
              </NavLink>
              <button className="menu-button">
                <GamesIcon />
              </button>
              <NavLink to="/recently-added" className="menu-button">
                <RecentlyAddedIcon />
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
