import React, { Fragment } from 'react';
import OverMe from './OverMe';
import Game from './Game';

const Sidebar = () => {
    return (
        <Fragment>
        <div className="thing">
            <OverMe />
        </div>
        <br></br>
        <div className="thing">    
            <Game />
        </div>
        </Fragment>

    );
};

export default Sidebar;


{/* <div className="container">
<div className="col-md-3 offset-md-9 align-self-end">
    <br></br>
    <OverMe />
    <br></br>
    <Game />
</div>
</div> */}
