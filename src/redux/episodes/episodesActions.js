import { EpisodesActionType } from "./episodesTypes";
import axios from "axios";

export const setCurrentData = (data) => ({
  type: EpisodesActionType.SET_CURRENT_DATA,
  payload: data,
});

export const setFavorite = (id) => ({
  type: EpisodesActionType.ADD_FAVORITES,
  payload: id,
});

export const removeFavorite = (id) => ({
  type: EpisodesActionType.REMOVE_FAVORITES,
  payload: id,
});

export const setPage = (page) => {
  return (dispatch) => {
    const apiUrl = `https://rickandmortyapi.com/api/episode?page=${page}`;
    axios.get(apiUrl).then((response) => {
      dispatch({
        type: EpisodesActionType.SEARCH_EPISODE,
        episode: response.data,
      });
    });
  };
};

export const searchEpisode = (text) => {
  return (dispatch) => {
    const apiUrl = `https://rickandmortyapi.com/api/episode/?name=${text}`;
    axios.get(apiUrl).then((response) => {
      dispatch({
        type: EpisodesActionType.SEARCH_EPISODE,
        episode: response.data,
      });
    });
  };
};

export const sortByName = (text) => ({
  type: EpisodesActionType.SORT_BY_NAME,
  payload: text,
});

export const sortByTime = (time) => ({
  type: EpisodesActionType.SORT_BY_TIME,
  payload: time,
});
