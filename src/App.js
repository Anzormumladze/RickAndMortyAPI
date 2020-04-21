import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EpisodesPage from "./pages/episodes/episodes";
import EpisodeDetail from "./pages/episodes/episodeDetail";
import HeroesPage from "./pages/heroes/heroes";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={EpisodesPage} />
        <Route path="/episode/details" component={EpisodeDetail} />
        <Route path="/heroes" component={HeroesPage} />
      </Switch>
    </Router>
  );
}

export default App;
