import React from 'react';
import SideGallery from '../../SideGallery';

const Sidebar = () => {
    return (
        <div className="container asside">
            <div className="row">
                <div className="col-md-3 offset-md-9 align-self-end">
                <SideGallery />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
