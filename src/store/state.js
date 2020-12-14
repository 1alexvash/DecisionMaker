import { defaultDecisions } from "./data";

const state = {
  decisions: localStorage.decisions
    ? JSON.parse(localStorage.decisions)
    : defaultDecisions,
};

export default state;
