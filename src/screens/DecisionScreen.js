import React, { useEffect } from "react";
import { useStoreState } from "easy-peasy";

const DecisionScreen = ({ match }) => {
  const { decisions } = useStoreState((state) => state);

  useEffect(() => {
    const id = match.params.id;

    const decision = decisions.find((decision) => decision.url === id);
    console.log("decision:", decision);
  }, [match, decisions]);

  return <div>Let's display a decision</div>;
};

export default DecisionScreen;
