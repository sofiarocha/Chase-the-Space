/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const MapList = ({ maps, onClickedMap }) => {
    return maps.map(m => <img src={m.src} alt="" key={m.src} onClick={() => onClickedMap(m)} />);
};

export default MapList;
