import axios from "axios"; 
import * as actions from './actionTypes';

export function getVideogames(){
    return async function (dispatch){
        try{
            let allVideogames = await axios.get('http://localhost:3001/videogames');
            return dispatch({
                type: actions.GET_VIDEOGAMES, 
                payload: allVideogames.data
            });
        }catch(e){
            console.log(e);
        };
    };
};

export const getGenres = () => {
    return async (dispatch) => {
        try {
          const allGenres = await axios.get(`http://localhost:3001/genres`);
          return dispatch({
            type: actions.GET_GENRES,
            payload: allGenres.data,
          });
        } catch (e) {
          console.error(e);
        }
    };
};

export const filterByGenre = (payload) => {
    try{
        return {
            type: actions.FILTER_BY_GENRE,
            payload,
        };
    } catch(e){
        console.error(e); 
    };
};

export const filterBySource = (payload) =>{
    try{
        return {
            type: actions.FILTER_BY_SOURCE,
            payload,
        };
    }catch(e){
        console.error(e); 
    };
};

export const sortBy = (payload) =>{
    try{
        return{
            type: actions.SORT_BY,
            payload,
        }
    }catch(e){
        console.error(e); 
    };
};

export const getName = (name) => (dispatch) => {
    try{
        return fetch(`http://localhost:3001/videogames?name=${name}`)
        .then(response => response.json())
        .then(nameInf => dispatch({type: actions.GET_NAME, payload: nameInf}));
    }catch(e){
        console.log(e);
    };
};

export const postVideogame = (data) => (dispatch) => {
        // const { data } = await axios.post('http://localhost:3001/videogames',data);
        const res = fetch('http://localhost:3001/videogames', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json; charset=UTF-8"} 
        })
        .then(response => response.json()).catch(e => console.log(e));
        return dispatch({
            type: actions.POST_VIDEOGAME,
            payload: res,
        });

};

export const getDetails = (id) => async (dispatch) => { 
    try{
        let details = await axios.get(`http://localhost:3001/videogame/${id}`);
        return dispatch({
            type: actions.GET_DETAIL, 
            payload: details.data});
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