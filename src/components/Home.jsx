import React from 'react';
import TitleHomeContainer from './TitleHomeContainer';
import Card from './Card';

const Home = () => {
    return (
        <div className="container">
            <div className="section1">
                <TitleHomeContainer />
            </div>
            <div className="section2">
                <div className="row">
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default Home;
