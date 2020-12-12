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

  return (
    <div className="Decision">
      <form className="new-factor">
        <input type="text" placeholder="New Factor" />
        <button type="button">Add New Factor</button>
      </form>
      {decision.firstChoice.name} / {decision.firstChoice.name}
    </div>
  );
};

export default DecisionScreen;
