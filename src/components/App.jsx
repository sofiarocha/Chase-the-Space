import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Home from './Home';
import Sidebar from './Sidebar';

const App = () => {
    return (
        <div className= "container">
            <Navbar />
            <Home />
            <Sidebar />
            <Footer />
        </div>
    );
};

export default App;
