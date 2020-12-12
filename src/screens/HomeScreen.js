import React, { useState } from "react";

import { useStoreState, useStoreActions } from "easy-peasy";

import plusImg from "../images/plus.png";
import crossImg from "../images/cross.png";

const HomeScreen = () => {
  const [modal, setModal] = useState(false);
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");

  const { decisions } = useStoreState((state) => state);
  const { addDecision } = useStoreActions((actions) => actions);

  const submitHandler = (e) => {
    e.preventDefault();

    if (firstOption === secondOption) {
      alert("Options can't have same names");
      return;
    }

    addDecision({ firstOption, secondOption });
    setModal(false);
  };

  const decisionsComponent = (
    <div className="decisions">
      {decisions.map((decision) => (
        <div
          className="decision"
          key={decision.firstChoice.name + decision.secondChoice.name}
        >
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
      <img
        src={plusImg}
        onClick={() => setModal(true)}
        alt=""
        title="open the modal"
      />
    </div>
  );

  const modalComponent = (
    <div className={`modal ${modal ? "show" : "hide"}`}>
      <div className="content">
        <img
          src={crossImg}
          className="cross"
          onClick={() => setModal(false)}
          title="close the window"
          alt=""
        />
        <form onSubmit={submitHandler}>
          <div className="options">
            <label htmlFor="option1">First Option:</label>
            <input
              type="text"
              id="option1"
              placeholder="Apples 🍏"
              value={firstOption}
              onChange={(e) => setFirstOption(e.target.value)}
              required
            />
            <div className="versus"></div>
            <label htmlFor="option2">Second Option:</label>
            <input
              type="text"
              id="option2"
              placeholder="Oranges 🍊"
              value={secondOption}
              onChange={(e) => setSecondOption(e.target.value)}
              required
            />
            <div className="versus"></div>
          </div>
          <button type="submit" className="submit-handler">
            Add decision
          </button>
        </form>
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
