import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StoreProvider } from "easy-peasy";

import HomeScreen from "./screens/HomeScreen";
import DecisionScreen from "./screens/DecisionScreen";

import store from "./store/store";

import "./scss/main.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <header className="Header">Decision Maker</header>
        <Route exact={true} path="/" component={HomeScreen}></Route>
        <Route path="/decision/:id" component={DecisionScreen}></Route>
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
