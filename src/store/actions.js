import { action } from "easy-peasy";

const debug = (data) => {
  console.log(JSON.parse(JSON.stringify(data)));
};

const actions = {
  addDecision: action((state, { firstOption, secondOption }) => {
    state.decisions.push({
      url: `${firstOption.trim()}-${secondOption.trim()}`,
      firstChoice: {
        score: 0,
        name: firstOption,
      },
      secondChoice: {
        score: 0,
        name: secondOption,
      },
      factors: [],
    });

    localStorage.decisions = JSON.stringify(state.decisions);
  }),
  setCurrentDecision: action((state, payload) => {
    state.decision = payload;
  }),
  deleteFactor: action((state, { index, name }) => {
    console.log("index:", index);
    console.log("name:", name);
    const decision = state.decisions[index];
    debug(decision);
    debug(decision.factors);
    debug(decision.factors.filter((factor) => factor.name !== name));
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

      localStorage.decisions = JSON.stringify(state.decisions);
    }
  ),
  newFactorSave: action((state, { index, name }) => {
    state.decisions[index].factors.push({
      name,
      importance: 2,
      firstChoice: 0,
      secondChoice: 0,
    });
    localStorage.decisions = JSON.stringify(state.decisions);
  }),
};

export default actions;
