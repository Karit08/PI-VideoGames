import React from "react";
import s from './NotFound.module.css'

const NotFound = () => {
    return(
        <div className={s.conteiner}>
           <div className={s.loader}>
                <span> Not found </span>
            </div>
        </div>
    )
};

export default NotFound;