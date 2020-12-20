import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { StoreProvider } from "easy-peasy";

import HomeScreen from "./screens/HomeScreen";
import DecisionScreen from "./screens/DecisionScreen";

import store from "./store/store";

import "./scss/main.css";

import Header from "./components/Header";

const App = () => {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <Router>
          <Route path="/" component={Header} />
          <Route path="/" exact={true} component={HomeScreen}></Route>
          <Route path="/decision/:id" component={DecisionScreen}></Route>
        </Router>
      </div>
    </StoreProvider>
  );
};

export default App;
