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

  return (
    <div className="navbar" suppressHydrationWarning>
      <div className="logo">{logoText || time}</div>

      <div className="menu">
        <ul>
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href="/routing">Routing</NavLink>
          </li>
          <li>
            <NavLink href="/CSR">CSR</NavLink>
          </li>
          <li>
            <NavLink href="/SSR">SSR</NavLink>
          </li>
          <li>
            <NavLink href="/SSG">SSG</NavLink>
          </li>
          <li>
            <NavLink href="/ISR">ISR</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderNextJsPOC;
