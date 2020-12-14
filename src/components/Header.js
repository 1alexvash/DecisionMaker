import React from "react";

import { Link } from "react-router-dom";
import logoImg from "../images/logo.png";

const Header = ({ history }) => {
  const { pathname } = history.location;

  return (
    <header className="Header">
      {pathname === "/" ? (
        <img src={logoImg} className="logo" alt="logo" />
      ) : (
        <Link to="/">
          <img src={logoImg} className="logo" alt="logo" />
        </Link>
      )}
      Decision Maker
    </header>
  );
};

export default Header;
