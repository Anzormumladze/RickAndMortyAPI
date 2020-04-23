import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EpisodesPage from "./pages/episodes/episodes";
import EpisodeDetail from "./pages/episodes/episodeDetail";
import HeroesPage from "./pages/heroes/heroes";
import HeroesDetail from "./pages/heroes/heroesDetail";
import FavoritePages from "./pages/episodes/episodeFavorite";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={EpisodesPage} />
        <Route path="/episode/details" component={EpisodeDetail} />
        <Route path="/episode/favorites" component={FavoritePages} />
        <Route path="/heroes" exact component={HeroesPage} />
        <Route path="/heroes/details" component={HeroesDetail} />
      </Switch>
    </Router>
  );
}

export default App;
