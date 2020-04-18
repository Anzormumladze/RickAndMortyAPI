import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EpisodesPage from "./pages/episodes";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={EpisodesPage} />
      </Switch>
    </Router>
  );
}

export default App;
