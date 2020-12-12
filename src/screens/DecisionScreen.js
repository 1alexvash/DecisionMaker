import React, { useEffect } from "react";

import { useStoreState, useStoreActions } from "easy-peasy";

const DecisionScreen = ({ match, history }) => {
  const { decisions, decision } = useStoreState((state) => state);
  const { setCurrentDecision } = useStoreActions((actions) => actions);

  useEffect(() => {
    const id = match.params.id;

    const decision = decisions.find((decision) => decision.url === id);
    setCurrentDecision(decision);

    if (!decision) {
      history.push("/");
    }
  }, [match, decisions, history]);

  return <div>{decision.firstChoice.name}</div>;
};

export default DecisionScreen;
