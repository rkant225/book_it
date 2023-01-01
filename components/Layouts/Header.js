import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import NavLink from "../Utils/NavLink";

const Header = () => {
  const handleHamBurgerMenuClick = () => {
    const menuContainer = document.getElementById("menu");
    menuContainer.classList.toggle("show-mobile-menu");
  };

  return (
    <div className="navbar" suppressHydrationWarning>
      <div className="logo">
        <Link href="/">book IT</Link>
      </div>

      <div className="menu" id="menu">
        <ul>
          <li>
            <NavLink href="/" onClick={handleHamBurgerMenuClick}>Home</NavLink>
          </li>
          <li>
            <NavLink href="/users" onClick={handleHamBurgerMenuClick}>Users</NavLink>
          </li>
          <li>
            <NavLink href="/users-swr" onClick={handleHamBurgerMenuClick}>Users SWR</NavLink>
          </li>
          <li>
            <NavLink href="/" onClick={handleHamBurgerMenuClick}>Designe</NavLink>
          </li>
          <li>
            <NavLink href="/" onClick={handleHamBurgerMenuClick}>Rooms</NavLink>
          </li>
          <li>
            <NavLink href="/" onClick={handleHamBurgerMenuClick}>Profile</NavLink>
          </li>
          <li>
            <NavLink href="/" onClick={handleHamBurgerMenuClick}>Contact</NavLink>
          </li>
          <li>
            <NavLink href="/CSR" onClick={handleHamBurgerMenuClick}>Next JS POC</NavLink>
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

export default Header;
