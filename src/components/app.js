import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./navbar";
import Home from "./home";
import About from "./about";
import Translator from "./translator";
import CardPage from "./cardpage";

// JSON Server runs on localhost:3000!!! Send requests to that URL.

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/translator">
        <Translator />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cardpage">
          <CardPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
