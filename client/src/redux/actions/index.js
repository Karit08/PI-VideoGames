import axios from "axios"; 
import * as actions from './actionTypes';

export function getVideogames(){
    return async function (dispatch){
        try{
            let json = await axios.get('http://localhost:3001/videogames');
            return dispatch({
                type: actions.GET_VIDEOGAMES, 
                payload: json.data
            });
        }catch(e){
            console.log(e);
        };
    };
};


export const getDetails = (id) => async (dispatch) => {
    dispatch(setLoading(true));
    try{
        await fetch(`http://localhost:3001/videogame/${id}`)
             .then(response => response.json())
             .then(detail => dispatch({type: actions.GET_DETAIL, payload: detail}));
        dispatch(setLoading(false));
    }catch(e){
        console.log(e);
    };
};

export const setLoading = (Loading) => dispatch =>{
    dispatch({
        type: actions.SET_LOADING,
        payload: !Loading,
    });
};

// export const getVideogames = () => async (dispatch) => {
//     dispatch(setLoading(true));
//     try{
//         const videogames = await axios.get('http://localhost:3001/videogames');
//         dispatch(setLoading(false));
//         return dispatch({
//             type: actions.GET_VIDEOGAMES, 
//             payload: videogames.data,
//         });
        
//     }catch(e){
//         console.log(e);
//     };
// };