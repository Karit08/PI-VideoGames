import React from "react";
import { Link } from "react-router-dom";
import s  from ".//LandingPage.module.css";

export default class LandingPage extends React.Component{
    render(){
        return (
        <div className={s.conteiner}>
            {/* <div className={s.nav}>
                <div> About me</div>
                <div>More Projects</div>
                <div>Contact</div>
            </div> */}
            <h1 className={s.text} >🎮 My PI project- for videogames lovers 🎮</h1>
            <br />
            <p >Made for Henry academy Lab project</p>
            {/* <h4> Browse through our list 🧾of videogame using our filter tool and find the bet videogame for you.</h4>
            <h4>And if you don't find an ideal game, you can create it.🧐</h4> */}
            <br />
            <Link to={'/home'}><button className={s.button}>Go 🕹️</button></Link>
        </div>
        )
    };
};
// export default function LandingPage(){
//     return (
//         <>
//         <ul>
//             <li>About me </li>
//             <li> More Projects </li>
//             <li> Contact</li>
//         </ul>

//         <h1> My PI project- for videogames lovers </h1>
//         <p>Made for Henry academy Lab project</p>
//         <NavLink exact to={'/home'}><button>Enter site</button></NavLink>
//         </>
//     )
// };