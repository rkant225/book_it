import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();

  const getClassName = (path) => {
    const pathName = router?.pathname;
    return pathName === path ? "active-link" : "";
  };

  return (
    <div className="navbar" suppressHydrationWarning>
      <div className="logo">
        <Link href="/">book IT</Link>
      </div>

      <div className="menu">
        <ul>
          <li>
            <Link href="/" className={getClassName("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className={getClassName("#")}>
              Designe
            </Link>
          </li>
          <li>
            <Link href="/" className={getClassName("#")}>
              Rooms
            </Link>
          </li>
          <li>
            <Link href="/" className={getClassName("#")}>
              Profile
            </Link>
          </li>
          <li>
            <Link href="/" className={getClassName("#")}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/CSR" className={getClassName("/CSR")}>
              Next JS POC
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
