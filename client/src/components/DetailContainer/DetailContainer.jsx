import React from "react";
import { useEffect } from "react";
import {Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../redux/actions/index"
import s from './DetailContainer.module.css';
// import Spinner from "../../Spinner/Spinner";

export default function DetailContainer() {
    const { idVideogame } = useParams();
    const dispatch = useDispatch();
    const  detail= useSelector(state => state.detail);
    console.log(detail);
    useEffect(()=>{
        dispatch(getDetails(idVideogame));
        // dispatch(getDetails(props.match.params.idVideogame));
    },[dispatch, idVideogame]);
    
    return (
        <div className={s.back}>
            <br />
            <Link to='/home'>
            <a className={s.fancy}>
                <span class={s.top_key}></span>
                <span class={s.text}>GO HOME</span>
                <span class={s.bottom_key_1}></span>
                <span class={s.bottom_key_2}></span>
            </a>
            </Link>
            <br />
            <div className={s.card}>
            { 
            detail &&
            <div>
                <img className= {s.card__img} src={detail.image !== null ? detail.image : 'https://s2.content.video.llnw.net/images-prod/81d5fd2a308b4f5c981628b17e9fcadd/media/54e1bb47375e4ad780ef6ce6e67c2e5c/preview-LbP.1024x576.jpeg'} alt={detail.name} width="200px" height="260px"/>
                <div className={s.card__title}>
                    <h3>{detail.name}</h3>
                    <div> Genres: {detail.genres?.map(g => ` ✔ ${g } `)}</div>
                    <br />
                    <div dangerouslySetInnerHTML={{__html:detail.description}} />
                    <br />
                    <p> Released: { detail.released} </p>
                    <p> Rating: { detail.rating} ⭐</p>
                    <div> Platforms: {detail.platforms?.map(g => ` ✔ ${g } `)}</div>
                </div>
                </div>
            }
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
        
    );
};