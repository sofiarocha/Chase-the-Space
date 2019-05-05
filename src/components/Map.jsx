import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const Leaflet = () => {
    const position = [51.505, -0.09]
    return (
        <div id="mapid" >
        <Map id="mapid" center={position} zoom={1} >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a>"
            />
            <Marker position={position}>
                <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
            </Marker> 
        </Map>

        </div>
    );
};

export default Leaflet;
