import { EpisodesActionType } from './episodesTypes';

const INITIAL_STATE = {
    fetchData:[]
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case EpisodesActionType.SET_CURRENT_DATA:
        return {
          ...state,
          fetchData: action.payload
        };
  
      default:
        return state;
    }
  };
  
  export default userReducer;