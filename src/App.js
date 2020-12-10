import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={HomeScreen}></Route>
      </Router>
    </div>
  );
};

export default App;
