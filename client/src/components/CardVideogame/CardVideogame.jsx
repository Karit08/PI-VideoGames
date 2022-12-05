import React from "react";
import s from './CardVideogame.module.css'
import { NavLink } from "react-router-dom";

class CardVideogame extends React.Component {
    render() {
        return (
            <div key={this.props.key} className={s.card}>
                <img src={this.props.image} alt={this.props.name} width="350px" height="200px" className= {s.card__img}/>
                <div className={s.card__title}>
                    <h3>{this.props.name}</h3>
                    <div>{this.props.genres?.map(g => <p>{g}</p>)}</div>
                    <p>{this.props.rating} ⭐⭐⭐</p>
                    <div>More details<NavLink to={`/detail/${this.props.id}`}><span>🔜▶</span></NavLink></div>
                </div>
            </div>
        )
    }
};


export default CardVideogame;