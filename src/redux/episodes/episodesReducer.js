import { EpisodesActionType } from "./episodesTypes";

const INITIAL_STATE = {
  fetchData: {},
  favoritesId: [],
  Pages: [],
  searchInput: "",
  sortedData: [],
  sortedByTimeData: [],
  detailData: [],
  heroData: [],
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
      return {
        ...state,
        sortedData: action.episode,
      };
    case EpisodesActionType.SORT_BY_TIME:
      return {
        ...state,
        sortedByTimeData: action.episode,
      };

    case EpisodesActionType.SHOW_MORE:
      return {
        ...state,
        detailData: action.episode,
      };
    case EpisodesActionType.SET_HERO_LIST:
      return {
        ...state,
        heroData: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
