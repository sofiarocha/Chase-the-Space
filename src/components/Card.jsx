import React from 'react';

const Card = ({ card }) => {
    return (
        <div className="col-5">
            <h1>{card.title}</h1>
            <img className="card-image" src={card.imageSrc} alt={card.title.toLowerCase()} />
            <p>{card.description}</p>
        </div>
    );
};

export default Card;
