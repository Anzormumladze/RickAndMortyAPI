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
