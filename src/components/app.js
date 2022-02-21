import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./navbar";
import Home from "./home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
