
import * as actions from '../actions/actionTypes';

const initialState = {
    allvideogames: [],
    videogames: [],
    genres: [],
    detail: {},
    loading: true,
};

export default function rootReducer(state= initialState, action){
    switch(action.type){
        case actions.GET_VIDEOGAMES :
            return {
                // videogames: state.videogames.concat(action.payload)
                ...state,
                allvideogames: action.payload, // renderizo
                videogames: action.payload, // copia
            };
        case actions.GET_GENRES:
            return{
                ...state,
                genres: action.payload,
            };
        case actions.FILTER_BY_GENRE:
            const games = state.videogames; 
            const filterGenre = action.payload === "" ? games : games.filter(e => e.genres?.some(e => e === action.payload));
            // const genreFiltered = action.payload === "" ? games : games.filter(e => e.genres?.includes(action.payload));
            return{
                ...state,
                allvideogames: filterGenre,  // [{}, {}, {}, {}] action 
            };
        case actions.FILTER_BY_SOURCE:
            const games1 = state.videogames;
            // const filterSource = action.payload === "Created" ? games1.filter(e => e.is_Db) : games1.filter( e => !e.is_Db);
            const filterSource = action.payload === "Created" ? games1.filter(v => typeof v.id !== 'number') : games1.filter(v =>  typeof v.id === 'number');
            return{
                ...state,
                allvideogames: action.payload === "" ? games1 : filterSource,
            }; 
        case actions.SORT_BY:
            let games3 = [...state.allvideogames]; //hago una copia de mi estado importante
            let sorT;
            switch (action.payload) {
                case '':
                    sorT = [...state.videogames];
                    break;
                case 'A-Z':
                    sorT = games3.sort(function(a, b) {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) {
                            return 1
                        }
                        if (a.name.toLowerCase() < b.name.toLowerCase()) {
                            return -1
                        }
                        return 0;
                    });
                    break;
                case 'Z-A':
                    sorT = games3.sort(function(a, b) {
                        if(a.name.toLowerCase() < b.name.toLowerCase()) {
                            return 1;
                          }
                          if (a.name.toLowerCase() > b.name.toLowerCase()) {
                            return -1;
                          }
                          return 0;
                    })
                    break;
                case 'RatingAsc':
                    sorT = games3.sort(function(a, b) {
                        return a.rating - b.rating
                    })
                    break;
                case 'RatingDesc':
                    sorT = games3.sort(function(a, b) {
                        return b.rating - a.rating
                    })
                    break;
                default:
                    sorT = games3
                    break;
            }
            return {
                ...state,
                allvideogames: sorT,
            };
        case actions.GET_NAME:
            return{
                ...state,
                allvideogames: action.payload,
            };
        case actions.POST_VIDEOGAME:
            return{
                ...state,
            }
        case actions.GET_DETAIL:
            return{
                ...state,
                detail: action.payload,
            };
        // case actions.SET_LOADING:
        //     return{
        //         ...state,
        //         loading: action.payload
        //     }
        default: return {...state};
    }
};