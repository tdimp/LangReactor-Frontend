import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./navbar";
import Home from "./home";
import About from "./about";
import Translator from "./translator";

// JSON Server runs on localhost:3000!!! Send requests to that URL.

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route><Route>
          <Translator />
        </Route>
        <Route>
          <About exact path="/about" />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
