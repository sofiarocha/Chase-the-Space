import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Footer from './Footer';
import NavigationBar from './NavigationBar';
import Home from './Home';
import ISS from './ISS';
import APOD from './APOD';
import AboutUs from './AboutUs';
import Page404 from './Page404';

const App = () => {
    return (
        <div>
            <NavigationBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/iss" component={ISS} />
                <Route path="/apod" component={APOD} />
                <Route path="/about" component={AboutUs} />
                <Route path="/404" component={Page404} />
                <Redirect to="/404" />
            </Switch>
            <Footer />
        </div>
    );
};

export default App;
