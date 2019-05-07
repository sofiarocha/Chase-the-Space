import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';


const iconISS = L.icon({
      iconUrl: "https://res.cloudinary.com/dl2ribpco/image/upload/v1557225295/ChaseTheSpace/iconISS_offev0.png",
      iconSize: new L.Point(30, 35),
      className: 'leaflet-div-icon'
  });


class Leaflet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 0,
            lng: 0,
            intervalId: undefined,
            isLoaded: false
        };
    }

    getPosition = () => {
        fetch("http://api.open-notify.org/iss-now.json")
            .then(response => response.json()) 
            .then(data => {
                this.setState ({
                    lat: data.iss_position.latitude,
                    lng: data.iss_position.longitude,
                    isLoaded: true
                });
        });
    }

    setTimer = () => {
        this.setState({
                intervalId: interval
        });
        const interval = setInterval(this.getPosition, 10000);
    }
   
    componentDidMount = () => {
        this.setTimer();
        this.getPosition();

    }

    componentWillUnmount = () => {
        clearInterval(this.state.intervalId);
    }


    render() {
        const position = [this.state.lat, this.state.lng];
        if (!this.state.isLoaded) { return null };
        return (
            <Map id="mapid" center={position} zoom='1'>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap contributors</a>"
                />
                <Marker className="leaflet-div-icon" position={position} icon={ iconISS } >
                    {/* <Popup></Popup> */}
                </Marker> 
            </Map>
        )
    }
}

export default Leaflet;
