import React from 'react';
import { Route, Switch } from "react-router-dom";
import Footer from './Footer';
import Navbar from './Navbar';
import Home from './Home';
import ISS from './ISS';
import APOD from './APOD';


const App = () => {
    return (
        <div>
            <Navbar />
            <Footer />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/iss" component={ISS} />
                <Route path="/apod" component={APOD} />
            </Switch>
        </div>
    );
};

export default App;
