import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

import { useStoreState } from "easy-peasy";

const DecisionScreen = ({ match }) => {
  const { decisions } = useStoreState((state) => state);
  let history = useHistory();

  useEffect(() => {
    const id = match.params.id;

    const decision = decisions.find((decision) => decision.url === id);

    if (!decision) {
      history.push("/");
    }
  }, [match, decisions]);

  return <div>Let's display a decision</div>;
};

export default DecisionScreen;
