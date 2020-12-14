export const defaultDecisions = [
  {
    url: "Apples-Oranges",
    firstChoice: {
      score: 51,
      name: "Apples",
    },
    secondChoice: {
      score: 64,
      name: "Oranges",
    },
    factors: [
      {
        name: "Taste",
        importance: 7,
        firstChoice: 3,
        secondChoice: 7,
      },
      {
        name: "Cheap Price",
        importance: 5,
        firstChoice: 6,
        secondChoice: 3,
      },
    ],
  },
  {
    url: "Detroit-Phoenix",
    firstChoice: {
      score: 232,
      name: "Detroit",
    },
    secondChoice: {
      score: 228,
      name: "Phoenix",
    },
    factors: [
      {
        name: "Weather",
        importance: 10,
        firstChoice: 2,
        secondChoice: 8,
      },
      {
        name: "Schools",
        importance: 3,
        firstChoice: 2,
        secondChoice: 3,
      },
      {
        name: "Cost of Living",
        importance: 6,
        firstChoice: 5,
        secondChoice: 7,
      },
      {
        name: "Business Climate",
        importance: 2,
        firstChoice: 6,
        secondChoice: 4,
      },
      {
        name: "Taxes",
        importance: 7,
        firstChoice: 6,
        secondChoice: 7,
      },
      {
        name: "Safety",
        importance: 4,
        firstChoice: 3,
        secondChoice: 6,
      },
      {
        name: "Entertainment",
        importance: 8,
        firstChoice: 5,
        secondChoice: 2,
      },
      {
        name: "Near Family",
        importance: 7,
        firstChoice: 10,
        secondChoice: 0,
      },
    ],
  },
];
