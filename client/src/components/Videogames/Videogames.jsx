import React from "react";
import s from './Videogames.module.css';
import CardVideogame from "../CardVideogame/CardVideogame";
import NotFound from "../NotFound";

export default function Videogames ({currentVideogames}){
    return(
        <div className={s.conteiner}>
            {   currentVideogames.length ? (currentVideogames.map(v => { 
                return(
                    <CardVideogame 
                        key={v.id}
                        image ={v.image} 
                        name= {v.name} 
                        genres= {v.genres} 
                        rating = {v.rating}
                    />
                )})): <NotFound/> 
            }
        </div>
    )
};