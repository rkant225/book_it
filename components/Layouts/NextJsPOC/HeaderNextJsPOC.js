import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const HeaderNextJsPOC = () => {
  const [time, setTime] = useState("Wait...");
  const router = useRouter();

  useEffect(() => {
    updateTime();
  }, []);
  const updateTime = () => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString().split(" ")[0]);
    }, 1000);
  };

  const getClassName = (path) => {
    const pathName = router?.pathname;
    return pathName === path ? "active-link" : "";
  };
  return (
    <div className="navbar" suppressHydrationWarning>
      <div className="logo">{time}</div>

      <div className="menu">
        <ul>
          <li>
            <Link href="/" className={getClassName("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/CSR" className={getClassName("/CSR")}>
              CSR
            </Link>
          </li>
          <li>
            <Link href="/SSR" className={getClassName("/SSR")}>
              SSR
            </Link>
          </li>
          <li>
            <Link href="/SSG" className={getClassName("/SSG")}>
              SSG
            </Link>
          </li>
          <li>
            <Link href="/ISR" className={getClassName("/ISR")}>
              ISR
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderNextJsPOC;
