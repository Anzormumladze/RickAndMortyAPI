import { combineReducers } from "redux";
import EpisodesReducer from './episodes/episodesReducer'

export default combineReducers({
 episodes:EpisodesReducer
});