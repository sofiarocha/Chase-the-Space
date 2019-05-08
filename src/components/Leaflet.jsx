import React, { Component } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';


const iconISS = L.icon({
      iconUrl: "https://res.cloudinary.com/dl2ribpco/image/upload/v1557235636/ChaseTheSpace/iconISS-flip_hiaznc.png",
      iconSize: new L.Point(45, 50),
      className: 'leaflet-div-icon'
  });


class Leaflet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 0,
            lng: 0,
            centerLat: 0,
            centerLng: 0,
            intervalId: undefined,
            isLoaded: false,
            zoom: '1'
        };
    }

    getPosition = () => {
        fetch("https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-now.json")
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

    handleZoom = (e) => {
        this.setState({
            zoom: e.target._zoom
        })
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
            <Map 
                className="mapsizing"
                id="mapid" 
                center={[this.state.centerLat, this.state.centerLng]} 
                zoom={this.state.zoom} 
                zoomControl={true}
                onZoomend={this.handleZoom} 
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap contributors</a>"
                />
                <Marker className="leaflet-div-icon" position={position} icon={ iconISS } >
                </Marker> 
            </Map>
        )
    }
}

export default Leaflet;
