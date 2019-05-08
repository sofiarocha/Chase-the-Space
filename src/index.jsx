import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Favicon from 'react-favicon';

import '../assets/stylesheets/application.scss';
import App from './components/App';

const root = document.getElementById('root');
if (root) {
    ReactDOM.render(
        <BrowserRouter basename={process.env.ROUTER_BASE_URL}>
        <Favicon url="https://www.pngkey.com/png/full/15-154688_black-hole-smash-ultimate-circle.png" />
            <App />
        </BrowserRouter>, root
    );
}
