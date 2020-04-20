import { EpisodesActionType } from "./episodesTypes";

const INITIAL_STATE = {
  fetchData: {},
  favoritesId: [],
  Pages: [],
  searchInput: "",
  sortedData: [],
  sortedByTimeData:[]
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EpisodesActionType.SET_CURRENT_DATA:
      return {
        ...state,
        fetchData: action.payload,
      };

    case EpisodesActionType.ADD_FAVORITES:
      return {
        ...state,
        favoritesId: [...state.favoritesId, action.payload],
      };

    case EpisodesActionType.REMOVE_FAVORITES:
      return {
        ...state,
        favoritesId: state.favoritesId.filter((id) => id !== action.payload),
      };
    case EpisodesActionType.NEXT_PAGE:
      return {
        ...state,
        Pages: action.payload,
      };
    case EpisodesActionType.SEARCH_EPISODE:
      return {
        ...state,
        fetchData: action.episode,
      };
    case EpisodesActionType.SORT_BY_NAME:
      console.log(action)
      return {
        ...state,
        sortedData: action.episode,
      };
    case EpisodesActionType.SORT_BY_TIME:
      console.log(action)
      return{
        ...state,
        sortedByTimeData:action.episode
      }

    default:
      return state;
  }
};

export default userReducer;
