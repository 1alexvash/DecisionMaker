import React, { useEffect } from "react";

const DecisionScreen = ({ match }) => {
  useEffect(() => {
    const id = match.params.id;
    console.log("match is ready", id);
  }, [match]);

  return <div>Let's display a decision</div>;
};

export default DecisionScreen;
