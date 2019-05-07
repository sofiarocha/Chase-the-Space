import React from 'react';
import Map from './Map';
import Sidebar from './Sidebar';

const ISS = () => {
    return (
        <div className="container issComponent">
            <div className="row">
                <div className="col-6">
                    <Map />
                </div>
                <div className="col-3 offset-2">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default ISS;
