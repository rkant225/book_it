import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavLink = ({ children, href, onClick }) => {
  const router = useRouter();
  const isActiveLink = router?.pathname === href || router?.asPath === href;
  return (
    <Link
      href={href}
      className={isActiveLink ? "active-link" : ""}
      onClick={onClick ? onClick : () => {}}
    >
      {children}
    </Link>
  );
};

export default NavLink;
