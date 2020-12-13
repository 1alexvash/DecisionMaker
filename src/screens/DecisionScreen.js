import React, { useState } from "react";

import { useStoreState, useStoreActions } from "easy-peasy";
import { Redirect } from "react-router-dom";

const DecisionScreen = ({ match }) => {
  const { decisions } = useStoreState((state) => state);
  const { updateFactorsProperty, newFactorSave } = useStoreActions(
    (actions) => actions
  );

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
      {decision.factors.map((factor, index) => (
        <div className="factor" key={index}>
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

          <p>Dalas: {factor.firstChoice * factor.importance}</p>
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

          <p>Detrois: {factor.secondChoice * factor.importance}</p>
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

  const resultsComponent = (
    <div className="results">
      <p>{decision.firstChoice.name}</p>
      <p>{decision.firstChoice.score}</p>
      <p>{decision.secondChoice.name}</p>
      <p>{decision.secondChoice.score}</p>
    </div>
  );

  return (
    <div className="Decision">
      {factorsComponent}
      {newFactorComponent}
      {resultsComponent}
    </div>
  );
};

export default DecisionScreen;
