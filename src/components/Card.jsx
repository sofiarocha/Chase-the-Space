import React from 'react';
import { Link } from "react-router-dom";

const Card = ({ card }) => {
    return (
        <Link to={`/${card.title.toLowerCase()}`} className="col-4">
            <h1>{card.title}</h1>
            <img className="card-image" src={card.imageSrc} alt={card.title.toLowerCase()} />
            <p>{card.description}</p>
        </Link>
    );
};

export default Card;
