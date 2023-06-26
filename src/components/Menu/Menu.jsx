import "./Menu.css";

import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navMoveContext } from "../../context/Context";

import BurgerIcon from "../../assets/svg/BurgerIcon";
import CloseIcon from "../../assets/svg/CloseIcon";
import HomeIcon from "../../assets/svg/HomeIcon";
import GamesIcon from "../../assets/svg/GamesIcon";
import RecentlyAddedIcon from "../../assets/svg/RecentlyAddedIcon";

const Menu = () => {
  const [menuBar, setMenuBar] = useState(false);
  const { navBarMove, setNavBarMove } = useContext(navMoveContext);

  const openMenuBar = () => {
    setMenuBar(true);
    setNavBarMove(true);
  };

  const closeMenuBar = () => {
    setMenuBar(false);
    setNavBarMove(false);
  };

  return (
    <>
      {menuBar ? (
        //* =========== Menu open =========== //

        <div className="menu-bar-open">
          <button onClick={closeMenuBar} className="menu-button-close">
            <CloseIcon />
          </button>
          <div className="menu-navigation">
            <NavLink to="/" className="menu-button">
              <div>
                <HomeIcon />
                <h2>Home</h2>
              </div>
            </NavLink>
            <NavLink to="/all-games" className="menu-button">
              <div>
                <GamesIcon />
                <h2>All Games</h2>
              </div>
            </NavLink>
            <NavLink to="/recently-added" className="menu-button">
              <div>
                <RecentlyAddedIcon />
                <h2>Recenty Added</h2>
              </div>
            </NavLink>
          </div>
        </div>
      ) : (
        //* =========== Menu closed =========== //

        <div className="menu-bar-close">
          <button onClick={openMenuBar} className="menu-button">
            <BurgerIcon />
          </button>
          <div className="menu-navigation">
            <NavLink to="/" className="menu-button">
              <HomeIcon />
            </NavLink>
            <NavLink to="/all-games" className="menu-button">
              <GamesIcon />
            </NavLink>
            <NavLink to="/recently-added" className="menu-button">
              <RecentlyAddedIcon />
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
