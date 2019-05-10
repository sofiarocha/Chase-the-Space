import React from 'react';

const LeafletMap = ({ leafletmap, handleClickMap }) => {
    const handleClick = () => handleClickMap(leafletmap.url);
    return (
        <img src={leafletmap.tileLayer} alt="" onClick={handleClick} role="presentation" />
    );
};

export default LeafletMap;
