import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import NavLink from "../../Utils/NavLink";

const HeaderNextJsPOC = ({ logoText }) => {
  const [time, setTime] = useState("Wait...");

  useEffect(() => {
    updateTime();
  }, []);
  const updateTime = () => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString().split(" ")[0]);
    }, 1000);
  };

  const handleHamBurgerMenuClick = () => {
    const menuContainer = document.getElementById("menu");
    menuContainer.classList.toggle("show-mobile-menu");
  };

  return (
    <div className="navbar">
      <div className="logo">{logoText || time}</div>

      <div id="menu" className="menu">
        <ul>
          <li>
            <NavLink href={"/"} onClick={handleHamBurgerMenuClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href="/routing" onClick={handleHamBurgerMenuClick}>
              Routing
            </NavLink>
          </li>
          <li>
            <NavLink href="/CSR" onClick={handleHamBurgerMenuClick}>
              CSR
            </NavLink>
          </li>
          <li>
            <NavLink href="/SSR" onClick={handleHamBurgerMenuClick}>
              SSR
            </NavLink>
          </li>
          <li>
            <NavLink href="/SSG" onClick={handleHamBurgerMenuClick}>
              SSG
            </NavLink>
          </li>
          <li>
            <NavLink href="/ISR" onClick={handleHamBurgerMenuClick}>
              ISR
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="hamburger-menu-container">
        <FontAwesomeIcon
          icon={faBars}
          className="hamburger-menu-icon"
          onClick={handleHamBurgerMenuClick}
        />
      </div>
    </div>
  );
};

export default HeaderNextJsPOC;
