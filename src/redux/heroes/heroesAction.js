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

export const searchEpisode = (text, gender) => {
  const apiUrl = `https://rickandmortyapi.com/api/character/?name=${text}`;
  let changeableUrl = apiUrl;
  if (gender) {
    changeableUrl = `https://rickandmortyapi.com/api/character/?name=${text}&gender=${gender}`;
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
