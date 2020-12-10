import { action } from "easy-peasy";

const actions = {
  sayHello: action((state, payload) => {
    alert("hello!!!!!!");
  }),
};

export default actions;
