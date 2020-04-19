import { EpisodesActionType } from './episodesTypes';

export const setCurrentData = data =>({
    type:EpisodesActionType.SET_CURRENT_DATA,
    payload:data
})