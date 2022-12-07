import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getVideogames} from "../../redux/actions/index";
import s from './Videogames.module.css';
import CardVideogame from "../CardVideogame/CardVideogame";
import Spinner from '../Spinner/Spinner';
import NotFound from "../NotFound/NotFound";

export default function Videogames ({currentVideogames}){
    const dispatch = useDispatch();
    const [carga, setCarga] = useState(true);

    useEffect( ()=>{
        dispatch(getVideogames()).then(()=> setCarga(false));
    },[dispatch]);

    return(
            carga ?(
                <>
                    <br />
                    <Spinner />
                    <br />
                </>
            ):
            ( <div className={s.conteiner}>
                {   currentVideogames.length ? (currentVideogames.map(v => { 
                    return(
                        <CardVideogame 
                            id={v.id}
                            image ={v.image} 
                            name= {v.name} 
                            genres= {v.genres} 
                            rating = {v.rating}
                    />
                )})): <NotFound/> 
                }
                </div>
            )
    )
};