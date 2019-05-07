import React from 'react';
import Map from './Map';
import Sidebar from './Sidebar';

const ISS = () => {
    return (
        <div className="container issComponent">
            <div className="row">
                <div className="col">
                    <Map />
                </div>
                <div className="col">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default ISS;
