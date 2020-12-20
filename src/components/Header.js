import React, { Fragment } from "react";

import { Link } from "react-router-dom";

import { useStoreActions } from "easy-peasy";

import logoImg from "../images/logo.png";
import trashImgDark from "../images/trash-dark.png";

const Header = ({ history }) => {
  const { pathname } = history.location;
  const { deleteDecision } = useStoreActions((actions) => actions);

  const decisionName = pathname.split("/")[2];

  return (
    <header className="Header">
      {pathname === "/" ? (
        <Fragment>
          <img src={logoImg} className="logo" alt="logo" />
          <p className="text">Decision Maker</p>
        </Fragment>
      ) : (
        <Fragment>
          <Link to="/">
            <img
              src={logoImg}
              className="logo"
              alt="logo"
              title="return home"
            />
          </Link>
          <p className="text">
            Decision Maker: <br />
            {decisionName && decisionName.replace(/-/g, " | ")}
          </p>
          <img
            src={trashImgDark}
            className="trash"
            alt={trashImgDark}
            onClick={() => deleteDecision(decisionName)}
            title={"Delete this decision"}
          />
        </Fragment>
      )}
    </header>
  );
};

export default Header;
