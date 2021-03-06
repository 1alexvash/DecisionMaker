import { action } from "easy-peasy";

// const debug = (data) => console.log(JSON.parse(JSON.stringify(data)));

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
  deleteDecision: action((state, payload) => {
    if (window.confirm("Are you sure you are no gonna regret it?")) {
      state.decisions = state.decisions.filter(
        (decision) => decision.url !== payload
      );
      localStorage.decisions = JSON.stringify(state.decisions);
    }
  }),
  deleteFactor: action((state, { decisionIndex, name }) => {
    const decision = state.decisions[decisionIndex];
    const updatedFactors = decision.factors.filter(
      (factor) => factor.name !== name
    );
    decision.factors = updatedFactors;
    localStorage.decisions = JSON.stringify(state.decisions);
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
    const listOfFactors = state.decisions[index].factors.map(
      (factor) => factor.name
    );

    if (listOfFactors.indexOf(name) >= 0) {
      alert("Can't create a factor with the same name");
    } else {
      state.decisions[index].factors.push({
        name,
        importance: 2,
        firstChoice: 0,
        secondChoice: 0,
      });
      localStorage.decisions = JSON.stringify(state.decisions);
    }
  }),
};

export default actions;
