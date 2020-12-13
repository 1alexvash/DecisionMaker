import React, { useState } from "react";

import { useStoreState } from "easy-peasy";
import { Redirect } from "react-router-dom";

const DecisionScreen = ({ match }) => {
  const { decisions } = useStoreState((state) => state);

  const decision = decisions.find(
    (decision) => decision.url === match.params.id
  );

  const [factors, setFactors] = useState([
    {
      name: "Weather",
      importance: 0,
      firstChoice: 0,
      secondChoice: 0,
    },
  ]);
  const [newFactorName, setNewFactorName] = useState("");

  if (!decision) {
    return <Redirect to="/" />;
  }

  const updateFactorsProperty = (e, index, prop) => {
    const updatedFactors = [...factors];
    updatedFactors[index][prop] = e.target.value;
    setFactors(updatedFactors);
  };

  const addNewFactor = (e) => {
    e.preventDefault();

    const updatedFactors = [...factors];
    updatedFactors.push({
      name: newFactorName,
      importance: 2,
      firstChoice: 0,
      secondChoice: 0,
    });

    setFactors(updatedFactors);

    setNewFactorName("");
  };

  const factorsComponent = (
    <div className="factors">
      {factors.map((factor, index) => (
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
            onChange={(e) => updateFactorsProperty(e, index, "importance")}
          />

          <p>Dalas: {factor.firstChoice * factor.importance}</p>
          <input
            type="range"
            min="0"
            max="10"
            value={factor.firstChoice}
            onChange={(e) => updateFactorsProperty(e, index, "firstChoice")}
          />

          <p>Detrois: {factor.secondChoice * factor.importance}</p>
          <input
            type="range"
            min="0"
            max="10"
            value={factor.secondChoice}
            onChange={(e) => updateFactorsProperty(e, index, "secondChoice")}
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
      <p>
        {factors.reduce(
          (prev, cur) => prev + cur.firstChoice * cur.importance,
          0
        )}
      </p>
      <p>{decision.secondChoice.name}</p>
      <p>
        {factors.reduce(
          (prev, cur) => prev + cur.secondChoice * cur.importance,
          0
        )}
      </p>
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
