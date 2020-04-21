import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EpisodesPage from "./pages/episodes/episodes";
import EpisodeDetail from "./pages/episodes/episodeDetail";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={EpisodesPage} />
        <Route path="/episode/details" component={EpisodeDetail} />
      </Switch>
    </Router>
  );
}

export default App;
