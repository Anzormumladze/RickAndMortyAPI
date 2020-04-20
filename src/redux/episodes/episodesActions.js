import { EpisodesActionType } from "./episodesTypes";

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
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: EpisodesActionType.SEARCH_EPISODE, episode: data });
      });
  };
};

export const searchEpisode = (text) => {
  return (dispatch) => {
    const apiUrl = `https://rickandmortyapi.com/api/episode/?name=${text}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: EpisodesActionType.SEARCH_EPISODE, episode: data });
      });
  };
};
