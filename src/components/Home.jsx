import React from 'react';
import TitleHomeContainer from './TitleHomeContainer';
import Card from './Card';

const Home = () => {
    return (
        <div className="container">
            <div id="section1">
                <TitleHomeContainer />
            </div>
            <div id="section2">
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default Home;
