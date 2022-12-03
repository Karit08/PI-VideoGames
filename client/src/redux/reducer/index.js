
import * as actions from '../actions/actionTypes';

const initialState = {
    allvideogames: [],
    detail: {},
    loading: true,
    videogamePage: 15,
    currentPage:1,
};

export default function rootReducer(state= initialState, action){
    switch(action.type){
        case actions.GET_VIDEOGAMES :
            return {
                ...state,
                // videogames: state.videogames.concat(action.payload)
                allvideogames: action.payload //  [{}, {}, {}]
            };
        case actions.GET_DETAIL:
            return{
                ...state,
                detail: action.payload
            };
        // case actions.SET_LOADING:
        //     return{
        //         ...state,
        //         loading: action.payload
        //     }
        default: return {...state}
    }
};