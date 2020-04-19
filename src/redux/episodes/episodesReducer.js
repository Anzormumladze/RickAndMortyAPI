import { EpisodesActionType } from "./episodesTypes";

const INITIAL_STATE = {
  fetchData: [],
  favoritesId: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EpisodesActionType.SET_CURRENT_DATA:
      return {
        ...state,
        fetchData: action.payload,
      };

    case EpisodesActionType.ADD_FAVORITES:
      console.log(action);
      return {
        ...state,
        favoritesId: [...state.favoritesId, action.payload],
      };

    case EpisodesActionType.REMOVE_FAVORITES:
      return {
        ...state,
        favoritesId: state.favoritesId.filter((id) => id !== action.payload),
      };

    default:
      return state;
  }
};

export default userReducer;
