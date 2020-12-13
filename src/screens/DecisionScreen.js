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

  if (!decision) {
    return <Redirect to="/" />;
  }

  const updateFactory = (e, index, prop) => {
    const newFactors = [...factors];
    newFactors[index][prop] = e.target.value;
    setFactors(newFactors);
  };

  return (
    <div className="Decision">
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
              onChange={(e) => updateFactory(e, index, "importance")}
            />

            <p>Dalas: {factor.firstChoice * factor.importance}</p>
            <input
              type="range"
              min="0"
              max="10"
              value={factor.firstChoice}
              onChange={(e) => updateFactory(e, index, "firstChoice")}
            />

            <p>Detrois: {factor.secondChoice * factor.importance}</p>
            <input
              type="range"
              min="0"
              max="10"
              value={factor.secondChoice}
              onChange={(e) => updateFactory(e, index, "secondChoice")}
            />
          </div>
        ))}
      </div>
      ### total scorll at the bottom
      <form className="new-factor">
        <input type="text" placeholder="New Factor" />
        <button type="button">Add New Factor</button>
      </form>
      {decision.firstChoice.name} / {decision.firstChoice.name}
    </div>
  );
};

export default DecisionScreen;
