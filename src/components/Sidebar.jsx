import React, { Fragment } from 'react';
import OverMe from './OverMe';
import Game from './Game';

const Sidebar = () => {
    return (
        <Fragment>
            <div className="thing p-4">
                <OverMe />
            </div>
            <div className="gamething p-4">
                <Game />
            </div>
        </Fragment>

    );
};

export default Sidebar;
