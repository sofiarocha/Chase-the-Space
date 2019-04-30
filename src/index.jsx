import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import '../assets/stylesheets/application.scss';
import App from './components/App';

const root = document.getElementById('root');
if (root) {
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>, root
    );
}
