import { createStore } from "easy-peasy";
import actions from "./actions";

const debug = (data) => console.log(JSON.parse(JSON.stringify(data)));

debug("Hello");

const store = createStore({
  decisions: [
    {
      url: "test",
      firstChoice: {
        score: 35,
        name: "Apples",
      },
      secondChoice: {
        score: 25,
        name: "Oranges",
      },
    },
    {
      url: "test2",
      firstChoice: {
        score: 217,
        name: "Detroit",
      },
      secondChoice: {
        score: 183,
        name: "Connecticut",
      },
    },
    {
      url: "test3",
      firstChoice: {
        score: 90,
        name: "Boxing",
      },
      secondChoice: {
        score: 40,
        name: "Futbool",
      },
    },
  ],

  ...actions,
});

export default store;
