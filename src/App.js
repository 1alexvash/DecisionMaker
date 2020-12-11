import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StoreProvider, useStoreState, useStoreActions } from "easy-peasy";

import HomeScreen from "./screens/HomeScreen";

import store from "./store";

const App = () => {
  const { hello } = useStoreState((state) => state);
  const { sayHello } = useStoreActions((actions) => actions);

  return (
    <div className="App">
      {hello}
      <button onClick={() => sayHello()}>Push Me</button>
      <Router>
        <Route path="/" component={HomeScreen}></Route>
      </Router>
    </div>
  );
};

// eslint-disable-next-line
export default () => (
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);
