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
  updateFactorsProperty: action(
    (state, { value, decisionIndex, factorIndex, property }) => {
      const decision = state.decisions[decisionIndex];
      decision.factors[factorIndex][property] = value;

      decision.firstChoice.score = decision.factors.reduce(
        (prev, cur) => prev + cur.firstChoice * cur.importance,
        0
      );
      decision.secondChoice.score = decision.factors.reduce(
        (prev, cur) => prev + cur.secondChoice * cur.importance,
        0
      );
    }
  ),
  newFactorSave: action((state, { index, name }) => {
    state.decisions[index].factors.push({
      name,
      importance: 2,
      firstChoice: 0,
      secondChoice: 0,
    });
  }),
};

export default actions;
