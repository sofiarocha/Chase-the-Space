import React from 'react';
import OverMe from './OverMe';
import Game from './Game';

const Sidebar = () => {
    return (
        <div className="container">
            <div className="col-md-3 offset-md-9 align-self-end">
                <br></br>
                <OverMe />
                <br></br>
                <Game />
            </div>
        </div>
    );
};

export default Sidebar;
