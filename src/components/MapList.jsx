import React from 'react';

const MapList =({ maps, onClickedMap }) => {
    return maps.map(m => <img src= {m.src} key={m.src} onClick={ () => onClickedMap(m) }  />);
}

export default MapList;
