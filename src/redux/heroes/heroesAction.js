import { heroesActionType } from "./heroesTypes";

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
