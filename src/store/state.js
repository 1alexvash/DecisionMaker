const state = {
  decisions: [
    {
      url: "test",
      firstChoice: {
        score: 35,
        name: "Apples",
      },
      secondChoice: {
        score: 25,
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
  ],
};

export default state;
