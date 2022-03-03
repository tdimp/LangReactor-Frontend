import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./navbar";
import Home from "./home";
import About from "./about";
import Translator from "./translator";
import FlashCardDeck from "./flashcarddeck";
import NewCardForm from "./newcardform";

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
        <Route path="/flashcarddeck">
          <FlashCardDeck />
        </Route>
        <Route path="/addnewcard">
          <NewCardForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
