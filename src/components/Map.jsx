import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';


class Leaflet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: 38.707010,
            lng: -9.135640
        };
    }
    
    getPosition = () => {
        fetch("http://api.open-notify.org/iss-now.json")
            .then(response => response.json()) 
            .then(data => {
                this.setState ({
                    lat: data.iss_position.latitude,
                    lng: data.iss_position.longitude
                });
        });
    }
   
    componentDidMount = () => {
        this.getPosition();
    }


    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <Map id="mapid" center={position} zoom='1'>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a>"
                />
                <Marker position={position}>
                    <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                </Marker> 
            </Map>
        )
    }
}

export default Leaflet;
