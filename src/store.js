import { createStore } from "easy-peasy";
import actions from "./actions";

const debug = (data) => console.log(JSON.parse(JSON.stringify(data)));

debug("Hello");

const store = createStore({
  hello: "hello",

  ...actions,
});

export default store;
