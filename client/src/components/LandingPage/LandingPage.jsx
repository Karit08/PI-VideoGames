import React from "react";
import { NavLink } from "react-router-dom";

export default class LandingPage extends React.Component{
    render(){
        return (
        <>
        <ul>
            <li>About me </li>
            <li> More Projects </li>
            <li> Contact</li>
        </ul>
        <h1> My PI project- for videogames lovers </h1>
        <p>Made for Henry academy Lab project</p>
        <NavLink exact to={'/home'}><button>Enter site</button></NavLink>
        </>
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