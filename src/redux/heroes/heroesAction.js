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

export const searchEpisode = (text) => {
  return (dispatch) => {
    const apiUrl = `https://rickandmortyapi.com/api/character/?name=${text}`;
    axios.get(apiUrl).then((response) => {
      dispatch({
        type: heroesActionType.SEARCH_EPISODE,
        episode: response.data,
      });
    });
  };
};
