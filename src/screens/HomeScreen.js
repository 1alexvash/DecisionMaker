import React, { useState } from "react";

import plusImg from "../images/plus.png";
import crossImg from "../images/cross.png";

const decisions = [
  {
    firstChoice: {
      score: 35,
      name: "Apples",
    },
    secondChoice: {
      score: 25,
      name: "Oranges",
    },
  },
  {
    firstChoice: {
      score: 217,
      name: "Detroit",
    },
    secondChoice: {
      score: 183,
      name: "Connecticut",
    },
  },
  {
    firstChoice: {
      score: 90,
      name: "Boxing",
    },
    secondChoice: {
      score: 40,
      name: "Futbool",
    },
  },
];

const HomeScreen = () => {
  const [modal, setModal] = useState(false);

  const decisionsComponent = (
    <div className="decisions">
      {decisions.map((decision) => (
        <div className="decision">
          <div className="first-decision-score">
            {decision.firstChoice.score}
          </div>
          <div className="choices">
            {decision.firstChoice.name} VS {decision.secondChoice.name}
          </div>
          <div className="second-decision-score">
            {decision.secondChoice.score}
          </div>
        </div>
      ))}
    </div>
  );

  const plusComponent = (
    <div className="plus">
      <img src={plusImg} onClick={() => setModal(true)} alt="" />
    </div>
  );

  const modalComponent = (
    <div className={`modal ${modal ? "show" : "hide"}`}>
      <div className="content">
        <img
          src={crossImg}
          className="cross"
          onClick={() => setModal(false)}
          alt=""
        />
      </div>
    </div>
  );

  return (
    <div className="Home">
      {decisionsComponent}
      {plusComponent}
      {modalComponent}
    </div>
  );
};

export default HomeScreen;
