import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StoreProvider } from "easy-peasy";

import HomeScreen from "./screens/HomeScreen";

import store from "./store";

import "./scss/main.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <header className="Header">Decision Maker</header>
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
