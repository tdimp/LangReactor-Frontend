import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./navbar";
import Home from "./home";

// JSON Server runs on localhost:3000!!! Send requests to that URL.

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
