import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, postVideogame } from '../../redux/actions';
import validate from './Validate.js';
import styles from './Create.module.css'

export default function Create(){
    const dispatch = useDispatch();
    const history = useHistory();
    const genres = useSelector( state => state.genres);
    const allGames = useSelector(state=> state.videogames);
    let [err, setErr] = useState({});

    let [input, setInput] = useState({
        name: "",
        image: "",
        description: "",
        released: "",
        rating: "",
        genres: [],
        platforms: [],
    });

    useEffect(()=>{
        dispatch(getGenres());
    }, [dispatch]);

    let handleChange = (e) => {
        e.preventDefault();
        setInput({
            ...input, 
            [e.target.name]:e.target.value,
        });
        setErr(validate({
            ...input,
            [e.target.name]:e.target.value,
        }))
    };

    let handleSelectG = (e) =>{
        if(!input.genres.includes(e.target.value)){
            setInput({
                ...input,
                genres:[...input.genres, e.target.value]
            })
        }
    };

    function handleDeleteG(e) {
        setInput({
          ...input,
          genres: input.genres.filter(genres => genres!== e)
        })
    };

    let handleSelectP = (e) =>{
        if(!input.platforms.includes(e.target.value)){
            setInput({
                ...input,
                platforms:[...input.platforms, e.target.value]
            })
        }
    };

    function handleDeleteP(e) {
        setInput({
          ...input,
          platforms: input.platforms.filter(platforms => platforms!== e)
        })
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postVideogame(input));
        alert('Videogame created!!');
        setInput({name: "",
        image: "",
        description: "",
        released: "",
        rating: "",
        genres: [],
        platforms: [],});
        history.push('/home');
    };

    const setArr = [];
    allGames.map(e => e.platforms?.map(e => setArr.push(e)));
    console.log(setArr);
    let newSet = [...new Set(setArr)];

    return (
        <div className={styles.createback}>
            <Link to='/home'>
            <button> GO HOME</button>
            </Link>
            
            <div className={styles.card}>
            <h1>Create Videogame</h1>
            <br />
            <form onSubmit={handleSubmit}>
    
            <div >
                <label>Name: </label>
                <input type="text" name="name" value={input.name} onChange={handleChange} className={err.name && styles["border-error"]}/>
                    {err.name && (<p className={styles["danger-error"]}>{err.name}</p>)}
            </div>
            <div>
                <label>Imagen URL:</label>
                <input type="text" name="image" value={input.image} onChange={handleChange} className={err.image && styles["border-error"]}/>
                    {err.image && (<p className={styles["danger-error"]}>{err.image}</p>)}
            </div>
            <div>
                <label>Description: </label>
                <input type="text" name="description" placeholder="Write a description of the game ..." value={input.description} onChange={handleChange} className={err.description && styles["border-error"]}/>
                    {err.description && (<p className={styles["danger-error"]}>{err.description}</p>)}
            </div>
            <div>
                <label>Release date: </label>
                <input type="date" name="released" placeholder="DD / MM / AAAA" value={input.released} onChange={handleChange} className={err.released && styles["border-error"]}/>
                    {err.released && (<p className={styles["danger-error"]}>{err.released}</p>)}
            </div>
            <div>
                <label>Rating: </label>
                <input type="number" name="rating" placeholder="Rating (1-5)" value={input.rating} onChange={handleChange} className={err.rating && styles["border-error"]}/>
                    {err.rating && (<p className={styles["danger-error"]}>{err.rating}</p>)}
            </div>
            <div>
                <label>Genres: </label>
                <select name='genres' onChange={handleSelectG}>
                    <option value="genres">Genres </option>
                    { genres?.map(g => {
                        return (
                            <option key={g.id} value={g.name}>{g.name}</option>
                        ) 
                    })}
                </select> 
                { input.genres?.map(e => {
                return(
                    <div key={e}>
                        <button onClick={() => handleDeleteG(e)}>x</button><span> {e} </span>
                    </div>
                )})
                }
            </div>
            <div>
                <label>Platforms: </label>
                <select name='platforms' onChange={handleSelectP}>
                    <option value="platforms">Platforms </option>
                    { newSet.map(p => (
                        <option key={p} value={p}>{p}</option>
                    ))}
                </select> 
                { input.platforms?.map(e => {
                return(
                    <div key={e}>
                        <button onClick={() => handleDeleteP(e)}>x</button><span> {e} </span>
                    </div>
                )})
                }
            </div>
            <br/>
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
        </div>
        
    )
};