import React from 'react';
import Map from './Map';
import Sidebar from './Sidebar';


const ISS = () => {
    return (
        <div className="container issComponent">
            <div className="row">
                <div className="col-6 offset-1">
                    <p>The ISS is moving at close to 28,000 Km/h. It circles the Earth in roughly 92 minutes and completes 15.5 orbits per day.
                    Where is it right now?</p>
                    <Map />
                </div>
                <div className="col-3 offset-1">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default ISS;
