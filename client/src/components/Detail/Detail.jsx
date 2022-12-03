import React from "react";

export default function Detail({
    detail: {
        id,
        image,
        name,
        genres,
        description,
        released,
        rating,
        platforms 
    },
}){
    return (
        <div>
            <div>{image}</div>
            <h1>{name}</h1>
            <p>{genres}</p>
            <p>{released}</p>
            <p>{rating}</p>
            <p>{platforms}</p>
            <p>{description}</p>
        </div>
    )

};