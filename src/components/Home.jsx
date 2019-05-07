import React from 'react';
import TitleHomeContainer from './TitleHomeContainer';
import Card from './Card';

const cards = [
    { title: "ISS", imageSrc: "https://res.cloudinary.com/dc4zctxhv/image/upload/v1557241326/Chase%20the%20Space/iss_square_gjinjs.jpg", description: "The International Space Station is a large spacecraft in orbit around Earth. It serves as a home where crews of astronauts and cosmonauts live. The space station is also a unique science laboratory." },
    { title: "APOD", imageSrc: "https://res.cloudinary.com/dc4zctxhv/image/upload/v1557241446/Chase%20the%20Space/apod_square_taou7h.jpg", description: "The Astronomy Picture of the Day. Everyday NASA will provide us a new super cool picture from space." },
];

const Home = () => {
    return (
        <div className="home-component">
            <div className="section1">
                <TitleHomeContainer />
            </div>
            <div className="section2">
                <div className="row">
                    {cards.map(card => <Card key={card.title} card={card} />)}
                </div>
            </div>
        </div>
    );
};

export default Home;
