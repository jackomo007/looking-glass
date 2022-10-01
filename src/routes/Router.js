import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home.js";
import Game from "../pages/Game.js";
import Score from "../pages/Score.js";
import Operator from "../pages/Operator.js";
import Puzzle from "../pages/Puzzle.js";
import Trivia from "../pages/Trivia.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/games" component={Game} />
        <Route exact path="/operator" component={Operator} />
        <Route exact path="/puzzle" component={Puzzle} />
        <Route exact path="/trivia" component={Trivia} />
        <Route exact path="/score" component={Score} />
        <Route>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => window.location.replace("/")}
          >
            Go Back
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
