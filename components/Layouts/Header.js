import Link from "next/link";
import React from "react";
import NavLink from "../Utils/NavLink";

const Header = () => {
  return (
    <div className="navbar" suppressHydrationWarning>
      <div className="logo">
        <Link href="/">book IT</Link>
      </div>

      <div className="menu">
        <ul>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/">Designe</NavLink>
          </li>
          <li>
            <NavLink href="/">Rooms</NavLink>
          </li>
          <li>
            <NavLink href="/">Profile</NavLink>
          </li>
          <li>
            <NavLink href="/">Contact</NavLink>
          </li>
          <li>
            <NavLink href="/CSR">Next JS POC</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
