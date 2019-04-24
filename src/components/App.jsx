import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Home from './Home';
import Sidebar from './Sidebar';

const App = () => {
    return (
        <div>
            <Navbar />
        <div className="container">
            <Home />
            <Sidebar />
        </div>
            <Footer />
        </div>
    );
};

export default App;
