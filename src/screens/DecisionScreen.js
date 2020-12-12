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

  return <div>{decision.firstChoice.name}</div>;
};

export default DecisionScreen;
