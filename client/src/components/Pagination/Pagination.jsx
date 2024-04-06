import React from "react";
import s from './Pagination.module.css'

export default function Pagination({allVideogames, videogamesPerPage, handleSetPage}){
    const numberPage = [];
    for(let i = 1; i <= Math.ceil(allVideogames/videogamesPerPage); i++) {  
        //i <= 100/15 = 6.66 => Math.ceil(6.66) = 7 => 1 <=  7
        numberPage.push(i);
    };
    
    return(
            <nav>
                <div className={s.paginacion}>
                {
                numberPage?.map(number => ( 
                    <span key={number}>
                        <button key={number} onClick={() => handleSetPage(number)} >
                            {number}
                        </button> 
                    </span>
                ))}
                </div>
            </nav>
        
    )
}