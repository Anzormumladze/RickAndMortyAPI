import { heroesActionType } from "./heroesTypes";

const INITIAL_STATE = {
  fetchData: [],
  favoritesId: [],
  Pages: [],
  searchInput: "",
  searchGender: [],
  searchStatus: [],
  searchSpecies: [],
  sortedData: [],
};

const heroesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case heroesActionType.SET_CURRENT_DATA:
      return {
        ...state,
        fetchData: action.payload,
      };
    case heroesActionType.ADD_FAVORITES:
      return {
        ...state,
        favoritesId: [...state.favoritesId, action.payload],
      };

    case heroesActionType.REMOVE_FAVORITES:
      return {
        ...state,
        favoritesId: state.favoritesId.filter((id) => id !== action.payload),
      };
    case heroesActionType.NEXT_PAGE:
      return {
        ...state,
        Pages: action.payload,
      };
    case heroesActionType.SEARCH_EPISODE:
      return {
        ...state,
        fetchData: action.episode,
      };
    case heroesActionType.SEARCH_GENDER:
      return {
        ...state,
        searchGender: action.payload,
      };
    case heroesActionType.SEARCH_STATUS:
      return {
        ...state,
        searchStatus: action.payload,
      };
    case heroesActionType.SEARCH_SPECIES:
      return {
        ...state,
        searchSpecies: action.payload,
      };
    case heroesActionType.SORT_BY_NAME:
      return {
        ...state,
        sortedData: action.payload,
      };
    default:
      return state;
  }
};

export default heroesReducer;
