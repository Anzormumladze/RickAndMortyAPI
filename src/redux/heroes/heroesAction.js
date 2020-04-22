import { heroesActionType } from "./heroesTypes";

import axios from "axios";

export const setCurrentData = (data) => ({
  type: heroesActionType.SET_CURRENT_DATA,
  payload: data,
});

export const setFavorite = (id) => ({
  type: heroesActionType.ADD_FAVORITES,
  payload: id,
});

export const removeFavorite = (id) => ({
  type: heroesActionType.REMOVE_FAVORITES,
  payload: id,
});

export const setPage = (page) => {
  return (dispatch) => {
    const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}`;
    axios.get(apiUrl).then((response) => {
      dispatch({
        type: heroesActionType.SEARCH_EPISODE,
        episode: response.data,
      });
    });
  };
};

export const searchEpisode = (text, gender, status, species) => {
  const apiUrl = `https://rickandmortyapi.com/api/character/?name=${text}`;
  let changeableUrl = apiUrl;
  if (gender && status && species) {
    changeableUrl = `https://rickandmortyapi.com/api/character/?name=${text}&gender=${gender}&status=${status}&species=${species}`;
  }
  if (status) {
    changeableUrl = `https://rickandmortyapi.com/api/character/?name=${text}&status=${status}`;
  }
  if (species) {
    changeableUrl = `https://rickandmortyapi.com/api/character/?name=${text}&species=${species}`;
  }
  return (dispatch) => {
    axios.get(changeableUrl).then((response) => {
      dispatch({
        type: heroesActionType.SEARCH_EPISODE,
        episode: response.data,
      });
    });
  };
};

export const searchGender = (text) => ({
  type: heroesActionType.SEARCH_GENDER,
  payload: text,
});

export const searchStatus = (text) => ({
  type: heroesActionType.SEARCH_STATUS,
  payload: text,
});

export const searchSpecies = (text) => ({
  type: heroesActionType.SEARCH_SPECIES,
  payload: text,
});

export const sortByName = (text) => ({
  type: heroesActionType.SORT_BY_NAME,
  payload: text,
});

export const sortByStatus = (text) => ({
  type: heroesActionType.SORT_BY_STATUS,
  payload: text,
});

export const detailPage = (url) => {
  return (dispatch) => {
    const apiUrl = url;
    axios.get(apiUrl).then((response) => {
      dispatch({
        type: heroesActionType.SHOW_MORE,
        episode: response.data,
      });
    });
  };
};

export const setEpisodeList = (list) => ({
  type: heroesActionType.SET_EPISODE_LIST,
  payload: list,
});
