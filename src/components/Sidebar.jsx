import React from 'react';
import SideGallery from '../../SideGallery';
import OverMe from './OverMe';

const Sidebar = () => {
    return (
        <div className="container asside">
            <div className="row">
                <div className="col-md-3 offset-md-9 align-self-end">
                <br></br>
                <OverMe />
                <br></br>
                <SideGallery />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
