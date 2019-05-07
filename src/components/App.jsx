import React from 'react';
import { Route, Switch } from "react-router-dom";
import Footer from './Footer';
import NavigationBar from './NavigationBar';
import Home from './Home';
import ISS from './ISS';
import APOD from './APOD';
import AboutUs from './AboutUs';


const App = () => {
    return (
        <div>
            <NavigationBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/iss" component={ISS} />
                <Route path="/apod" component={APOD} />
                <Route path="/about" component={AboutUs} />
            </Switch>
            <Footer />
        </div>
    );
};

export default App;
