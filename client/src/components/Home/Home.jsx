import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
// import { NavLink } from "react-router-dom";
import Funcionality from "../Funcionality/Funcionality";
import Videogames from "../Videogames/Videogames";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import { getVideogames, filterByGenre, filterBySource, sortBy } from "../../redux/actions/index";
// import Spinner from "../Spinner/Spinner"

export default function Home (){
    const allVideogames = useSelector((state) => state.allvideogames );
    const [currentPage, setCurrentPage] = useState(1); 
    const [videogamesPerPage, setVideogamesPerPage ] = useState(5);
    const lastIndex = currentPage * videogamesPerPage; //1*15 = 15
    const firstIndex=  lastIndex - videogamesPerPage;//15 - 15 = 0
    const currentVideogames = allVideogames.slice(firstIndex, lastIndex);

    const dispatch = useDispatch();
    // ...............................Paginado................................
    const handleSetPage = num =>{
        setCurrentPage(num);
    };

    const handleSetMoviesPerPage = num =>{
        setCurrentPage(1);
        setVideogamesPerPage(parseInt(num));
    };
    
    useEffect( ()=>{
        dispatch(getVideogames());
    },[dispatch]);

   // ...............................Filtros................................

    function handleSort(e){
        e.preventDefault();
        dispatch(sortBy(e.target.value));
        setCurrentPage(1);
    }
    
    function handleFilter(e) {
        e.preventDefault();
        dispatch(filterByGenre(e.target.value));
        setCurrentPage(1);
        // e.preventDefault();
        // if(e.target.value === '') {
        //     dispatch(getVideogames());
        // } else {
        //     dispatch(filterByGenre(e.target.value));
        //     setCurrentPage(1);
        // };
    };
    
    function handleSource(e){
        // e.preventDefault();
        dispatch(filterBySource(e.target.value));
        setCurrentPage(1);
    };

    

    // function handleClick(e){
    //     e.preventDefault();
    //     dispatch(getVideogames());
    // }

    return (
    <div>
       
        <br />
        <h1>VIDEOGAME</h1>
        <p>Trying to decide what kind of videogame you prefer? Browse through our list of videogame using our filter tool and find the bet videogame for you.</p>
        <p>And if you don't find an ideal game, you can create it.</p>
        {/* <NavLink to='/character'> CREATE VIDEOGAME </NavLink>
        <button onClick={e => {handleClick(e)}}>Show all Reload</button> */}
        <div>
            <div>
                <Funcionality handleSort={handleSort} handleFilter= {handleFilter} handleSource={handleSource}/>
            </div>
            <br />
            <div>
                <Pagination 
                    allVideogames={allVideogames.length} 
                    videogamesPerPage= {videogamesPerPage} 
                    handleSetPage = {handleSetPage}
                />
                <select name="" id="" onChange={(e) => handleSetMoviesPerPage(e.target.value)}>
                     <option value="5">5</option>
                     <option value="10">10</option>
                     <option value="15">15</option>
                </select>
            </div>
            <br />
            <div>
                <SearchBar />
            </div>
            <br />
            <div>
                <Videogames currentVideogames={currentVideogames} />
            </div>
        </div>

    </div>
   );
};