import React from "react";
import s from './Page404.module.css';

const Page = ()=>{
    return (
        <>
        <div className={s.conteiner}>
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