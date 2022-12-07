import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { getVideogames } from "../../redux/actions/index";
import { useDispatch } from "react-redux";
import s from './NavBar.module.css';

export default function NavBar() {

    const dispatch = useDispatch()

    function handleClick(e){
        e.preventDefault();
        dispatch(getVideogames());
    }

    return (
            <nav className={s.conteiner}>
                <div >
                    <button className={s.button} onClick={handleClick}>Refresh</button>
                </div>
                <div >
                    <SearchBar />
                </div>
                <div>
                    <button className={s.button}><Link to={'/create'}> Create Videogame  👾 </Link></button>
                </div>
            </nav>
        //</div>
    )
}