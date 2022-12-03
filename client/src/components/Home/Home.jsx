import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions/index";
import { NavLink } from "react-router-dom";
import Videogames from "../Videogames/Videogames";
// import Spinner from "../Spinner/Spinner"

export default function Home (){
   const dispatch = useDispatch();
   const allVideogames = useSelector((state) => state.videogames );
//    const [page, setPage] =  useState(1);

   useEffect( ()=>{
        dispatch(getVideogames());
   },[dispatch]);

   function handleClick(e){
    e.preventDefault();
    dispatch(getVideogames());

   }

   return (
    <div>
        <h1>VIDEOGAME</h1>
        <p>Trying to decide what kind of videogame you prefer? Browse through our list of videogame using our filter tool and find the bet videogame for you.</p>
        <p>And if you don't find an ideal game, you can create it.</p>
        <NavLink to='/character'> CREATE VIDEOGAME </NavLink>
        <button onClick={e => {handleClick(e)}}>Show all Reload</button>
        <div>
            <select name="Genre" id="">
                <option value=""></option>
            </select>
            <select name="Api/Db" id="">
                <option value="mayor">Db</option>
                <option value="menor">Api</option>
            </select>
            <select name="Alphabetic" id="">
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
            </select>
            <select name="Rating" id="">
                <option value="mayor">+ Rating</option>
                <option value="menor">- Rating</option>
            </select>
            <div>
                <Videogames/>
            </div>
        </div>

    </div>
   );
};