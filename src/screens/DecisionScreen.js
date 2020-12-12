import React from "react";

import { useStoreState } from "easy-peasy";
import { Redirect } from "react-router-dom";

const DecisionScreen = ({ match }) => {
  const { decisions } = useStoreState((state) => state);

  const decision = decisions.find(
    (decision) => decision.url === match.params.id
  );

  if (!decision) {
    return <Redirect to="/" />;
  }

  const factors = [
    {
      name: "Weather",
      importance: 0,
      firstChoice: 0,
      secondChoice: 0,
    },
  ];

  return (
    <div className="Decision">
      <div className="factors">
        {factors.map((factor) => (
          <div
            className="factor"
            style={{
              background: "#eee",
              padding: "20px",
              margin: "20px",
              border: "2px solid #333",
            }}
          >
            <p>
              {factor.name}: {factor.importance}
            </p>
            <input type="range" min="0" max="10" title="Importance" />

            <p>Dalas [3]</p>
            <input type="range" min="0" max="10" />

            <p>Detrois [2]</p>
            <input type="range" min="0" max="10" />
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
