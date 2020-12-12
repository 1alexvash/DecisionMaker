import { action } from "easy-peasy";

const actions = {
  addDecision: action((state, { firstOption, secondOption }) => {
    state.decisions.push({
      url: `${firstOption}-${secondOption}`,
      firstChoice: {
        score: 0,
        name: firstOption,
      },
      secondChoice: {
        score: 0,
        name: secondOption,
      },
    });
  }),
  setCurrentDecision: action((state, payload) => {
    state.decision = payload;
  }),
};

export default actions;
