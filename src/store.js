import { createStore } from "easy-peasy";
import actions from "./actions";

const store = createStore({
  hello: "hello",

  ...actions,
});

export default store;
