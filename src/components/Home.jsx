import React from 'react';
import TitleHomeContainer from './TitleHomeContainer';
import Card from './Card';

const cards = [
    { title: "ISS", imageSrc: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80", description: "The International Space Station is a large spacecraft in orbit around Earth. It serves as a home where crews of astronauts and cosmonauts live. The space station is also a unique science laboratory." },
    { title: "APOD", imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80", description: "The Astronomy Picture of the Day. Everyday NASA will provide us a new super cool picture from space." },
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
