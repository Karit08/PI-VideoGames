import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../redux/actions/index";
import s from './Funcionality.module.css';

const Funcionality = ({handleSort, handleFilter, handleSource}) => {

    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);

    useEffect(() => { //
        dispatch(getGenres());
    }, [dispatch]);

    return (
            <div className={s.conteiner}>
                    <select className={s.select} onChange={e => handleSort(e)}>
                        <option value="" >Sort by...</option>
                        <option value="A-Z" >A-Z</option>
                        <option value="Z-A" >Z-A</option>
                        <option value="RatingAsc">Rating Asc</option>
                        <option value="RatingDesc">Rating Desc</option>
                    </select>

                    <select className={s.select} id="genre" onChange={e => handleFilter(e)}>
                        <option value="">Genres</option>
                        {genres && genres.map(g => {
                            return (
                                <option key={g.id} value={g.name}>{g.name}</option>
                            )
                        })}
                    </select>

                    <select className={s.select} onChange={e => handleSource(e)}>
                        <option value="">Filter by Origin</option>
                        <option value="Api">API</option>
                        <option value="Created">Created</option>
                    </select>
            </div>
    )
}

export default Funcionality;