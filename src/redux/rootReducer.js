import { combineReducers } from "redux";
import EpisodesReducer from "./episodes/episodesReducer";
import HeroesReducer from "./heroes/heroesReducer";

export default combineReducers({
  episodes: EpisodesReducer,
  heroes: HeroesReducer,
});
