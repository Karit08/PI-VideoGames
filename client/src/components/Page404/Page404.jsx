import React from "react";
import { Link } from "react-router-dom";
import s from './Page404.module.css';

const Page = ()=>{
    return (
        <>
        <div className={s.conteiner}>
            <Link to='/home'><p> GO HOME</p></Link>
            <h1>Error 404 🥺</h1>
            <br />
            <br />
            <div class={s.bar}>
            <div class={s.ball}></div>
            </div>
        </div>
        </>
       
    );
};

export default Page;