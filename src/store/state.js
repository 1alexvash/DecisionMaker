const defaultDecisions = [
  {
    url: "Apples-Oranges",
    firstChoice: {
      score: 0,
      name: "Apples",
    },
    secondChoice: {
      score: 0,
      name: "Oranges",
    },
    factors: [
      {
        name: "Weather",
        importance: 0,
        firstChoice: 0,
        secondChoice: 0,
      },
    ],
  },
];

const state = {
  decisions: localStorage.decisions
    ? JSON.parse(localStorage.decisions)
    : defaultDecisions,
};

export default state;
