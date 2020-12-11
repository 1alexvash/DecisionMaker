import { createStore } from "easy-peasy";
import actions from "./actions";

const debug = (data) => JSON.parse(JSON.stringify(data));

console.log("Hello");

const store = createStore({
  hello: "hello",

  ...actions,
});

export default store;
