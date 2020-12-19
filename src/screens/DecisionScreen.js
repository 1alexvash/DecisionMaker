import React, { useState } from "react";

import { useStoreState, useStoreActions } from "easy-peasy";
import { Redirect } from "react-router-dom";

import warningImg from "../images/warning.png";
import trashImg from "../images/trash.png";

const DecisionScreen = ({ match }) => {
  const { decisions } = useStoreState((state) => state);
  const {
    deleteFactor,
    updateFactorsProperty,
    newFactorSave,
  } = useStoreActions((actions) => actions);

  const decision = decisions.find(
    (decision) => decision.url === match.params.id
  );

  const [newFactorName, setNewFactorName] = useState("");

  if (!decision) {
    return <Redirect to="/" />;
  }

  const addNewFactor = (e) => {
    e.preventDefault();

    const index = decisions.indexOf(decision);
    const name = newFactorName;

    newFactorSave({
      index,
      name,
    });

    setNewFactorName("");
  };

  const factorsComponent = (
    <div className="factors">
      {decision.factors.length === 0 && (
        <div className="warning">
          <img src={warningImg} alt="warning" />
          There are no any factors at the moment. You can add one down bellow.
        </div>
      )}
      {decision.factors.map((factor, index) => (
        <div className="factor" key={index}>
          <img
            src={trashImg}
            alt="trash"
            title="Delete this factor"
            onClick={() =>
              deleteFactor({
                decisionIndex: decisions.indexOf(decision),
                name: factor.name,
              })
            }
          />
          <p>
            {factor.name}: {factor.importance}
          </p>
          <input
            type="range"
            min="0"
            max="10"
            title="Importance"
            value={factor.importance}
            onChange={(e) =>
              updateFactorsProperty({
                value: parseInt(e.target.value),
                decisionIndex: decisions.indexOf(decision),
                factorIndex: index,
                property: "importance",
              })
            }
          />
          <p>
            {decision.firstChoice.name}:{" "}
            {factor.firstChoice * factor.importance}
          </p>
          <input
            type="range"
            min="0"
            max="10"
            value={factor.firstChoice}
            onChange={(e) =>
              updateFactorsProperty({
                value: parseInt(e.target.value),
                decisionIndex: decisions.indexOf(decision),
                factorIndex: index,
                property: "firstChoice",
              })
            }
          />
          <p>
            {decision.secondChoice.name}:{" "}
            {factor.secondChoice * factor.importance}
          </p>
          <input
            type="range"
            min="0"
            max="10"
            value={factor.secondChoice}
            onChange={(e) =>
              updateFactorsProperty({
                value: parseInt(e.target.value),
                decisionIndex: decisions.indexOf(decision),
                factorIndex: index,
                property: "secondChoice",
              })
            }
          />
        </div>
      ))}
    </div>
  );

  const newFactorComponent = (
    <form className="new-factor" onSubmit={addNewFactor}>
      <input
        type="text"
        placeholder="New Factor"
        required
        value={newFactorName}
        onChange={(e) => setNewFactorName(e.target.value)}
      />
      <button type="submit">Add New Factor</button>
    </form>
  );

  return (
    <div className="Decision">
      {factorsComponent}
      {decision.factors.length > 0 && <ResultsComponent decision={decision} />}

      {newFactorComponent}
    </div>
  );
};

const ResultsComponent = ({ decision }) => {
  function getPercentage(score) {
    return (
      (score / (decision.firstChoice.score + decision.secondChoice.score)) * 100
    );
  }

  return (
    <div className="results">
      <div
        className="bar1"
        style={{
          width: `${getPercentage(decision.firstChoice.score)}%`,
        }}
        title={`${Math.round(getPercentage(decision.firstChoice.score))}%`}
      >
        <div className="text">
          {decision.firstChoice.name} [{decision.firstChoice.score}]
        </div>
      </div>
      <div
        className="bar2"
        style={{
          width: `${getPercentage(decision.secondChoice.score)}%`,
        }}
        title={`${Math.round(getPercentage(decision.secondChoice.score))}%`}
      >
        <div className="text">
          {decision.secondChoice.name} [{decision.secondChoice.score}]
        </div>
      </div>
    </div>
  );
};

export default DecisionScreen;
