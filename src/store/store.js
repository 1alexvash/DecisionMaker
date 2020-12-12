import { createStore } from "easy-peasy";
import state from "./state";
import actions from "./actions";

const debug = (data) => console.log(JSON.parse(JSON.stringify(data)));

debug("Hello");

const store = createStore({
  ...state,
  ...actions,
});

export default store;
