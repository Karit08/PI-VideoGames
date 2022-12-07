import React from "react";
import s from './CardVideogame.module.css'
import { Link } from "react-router-dom";

class CardVideogame extends React.Component {
    render() {
        return (
            <div key={this.props.id} >
                <div className={s.card}>
                    <img src={this.props.image} alt={this.props.name} width="350px" height="200px" className= {s.card__img}/>
                <div className={s.card__title}>
                    <h3>{this.props.name}</h3>
                    <div> Genres: {this.props.genres?.map(g => ` ✔ ${g } `)}</div>
                    <p> Rating: { this.props.rating} ⭐</p>
                    <div>More details<Link to={`/detail/${this.props.id}`}><span>▶▶</span></Link></div>
                </div>
                </div>
                
            </div>
        );
    };
};


export default CardVideogame;