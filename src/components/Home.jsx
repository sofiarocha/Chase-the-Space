import React from 'react';
import TitleHomeContainer from './TitleHomeContainer';
<<<<<<< HEAD
import Navbar from './Navbar';
import Footer from './Footer';
=======
import Card from './Card';
>>>>>>> fe99937c3972c1f79c3915a8f9e17e0c7e69fada

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
