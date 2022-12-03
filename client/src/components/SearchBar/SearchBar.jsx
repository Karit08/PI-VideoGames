import React from "react";
// import style from 'Nav.module.css'
import { NavLink } from "react-router-dom";

export default function SearchBar(){
    return (
        <div>
           <button><NavLink to='/home'>Home </NavLink></button>
           <button><NavLink to='/create'> Create Videogame </NavLink></button>
        </div>
    );
};