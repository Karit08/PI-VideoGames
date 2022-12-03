import React, { useState } from "react";
import s from './Videogames.module.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions/index";
import CardVideogame from "../CardVideogame/CardVideogame";
import Pagination from "../Pagination/Pagination";

export default function Videogames (){
    const dispatch = useDispatch();
    const allVideogames = useSelector((state) => state.allvideogames );
    // [{},{},{},{},{},{}]
    //  0   1  2  3  4  5
    //                  |
    // |
    // |--------------|

    const [currentPage, setCurrentPage] = useState(1); // pagina actual
    const [videogamesPerPage, setVideogamesPerPage ] = useState(5);
    const lastIndex = currentPage * videogamesPerPage; //1*15 = 15
    const firstIndex=  lastIndex - videogamesPerPage;//15 - 15 = 0
    const currentVideogames = allVideogames.slice(firstIndex, lastIndex);

    const handleSetPage = num =>{
        setCurrentPage(num);
    };

    const handleSetMoviesPerPage = num =>{
        setCurrentPage(1);
        setVideogamesPerPage(parseInt(num));
    }

   useEffect( ()=>{
        dispatch(getVideogames());
   },[dispatch]);

    return(
        <div className={s.conteiner}>
            {  allVideogames.length ? (
            <>
                <div>
                    
                    <Pagination 
                    allVideogames={allVideogames.length} 
                    videogamesPerPage= {videogamesPerPage} 
                    handleSetPage = {handleSetPage}/> 
                    
                    <select name="" id="" onChange={(e) => handleSetMoviesPerPage(e.target.value)}>
                     <option value="5">5</option>
                     <option value="10">10</option>
                     <option value="15">15</option>
                    </select>
                    
                </div>
                <br/>
                {
                currentVideogames.map(v => { 
                return(
                    <CardVideogame 
                        key={v.id}
                        image ={v.image} 
                        name= {v.name} 
                        genres= {v.genres} 
                        rating = {v.rating}
                    />
                )})}
                </>) : null
            }
        </div>
    )
};