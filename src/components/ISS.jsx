import React from 'react';
import Leaflet from './Leaflet';
import Sidebar from './Sidebar';


const ISS = () => {
    return (
        <div className="container issComponent">
            <div className="map-container">
                <p>The ISS is moving at close to 28,000 Km/h. It circles the Earth in roughly 92 minutes and completes 15.5 orbits per day.
                Where is it right now?</p>
                <Leaflet />
            </div>
            <div className="sidebar-container">
                <Sidebar />
            </div>
        </div>
    );
};

export default ISS;
