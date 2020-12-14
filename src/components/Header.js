import React, { Fragment } from "react";

import { Link } from "react-router-dom";
import logoImg from "../images/logo.png";

const Header = ({ history }) => {
  const { pathname } = history.location;

  return (
    <header className="Header">
      {pathname === "/" ? (
        <Fragment>
          <img src={logoImg} className="logo" alt="logo" />
          <p>Decision Maker</p>
        </Fragment>
      ) : (
        <Fragment>
          <Link to="/">
            <img src={logoImg} className="logo" alt="logo" />
          </Link>
          <p>
            Decision Maker: <br />
            {pathname.split("/")[2].replace(/-/g, " | ")}
          </p>
        </Fragment>
      )}
    </header>
  );
};

export default Header;
