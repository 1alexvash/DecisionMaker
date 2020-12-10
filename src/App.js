import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StoreProvider, useStoreState } from "easy-peasy";

import HomeScreen from "./screens/HomeScreen";

import store from "./store";

const App = () => {
  const { hello } = useStoreState((state) => state);

  return (
    <div className="App">
      {hello}
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
