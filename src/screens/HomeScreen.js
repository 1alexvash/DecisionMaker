import React from "react";

const decisions = [
  {
    firstChoice: {
      score: 35,
      name: "Apples",
    },
    secondChoice: {
      score: 25,
      name: "Oranges",
    },
  },
  {
    firstChoice: {
      score: 217,
      name: "Detroit",
    },
    secondChoice: {
      score: 183,
      name: "Connecticut",
    },
  },
  {
    firstChoice: {
      score: 90,
      name: "Boxing",
    },
    secondChoice: {
      score: 40,
      name: "Futbool",
    },
  },
];

const HomeScreen = () => {
  return (
    <div className="Home">
      <div className="decisions">
        {decisions.map((decision) => (
          <div className="decision">
            <div className="first-decision-score">
              {decision.firstChoice.score}
            </div>
            <div className="choices">
              {decision.firstChoice.name} VS {decision.secondChoice.name}
            </div>
            <div className="second-decision-score">
              {decision.secondChoice.score}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
