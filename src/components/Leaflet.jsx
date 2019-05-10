import React, { Component } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { ClapSpinner } from 'react-spinners-kit';


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
            .then((data) => {
                this.setState({
                    lat: data.iss_position.latitude,
                    lng: data.iss_position.longitude,
                    isLoaded: true,
                });
            });
    }

    setTimer = () => {
        const interval = setInterval(this.getPosition, 10000);
        this.setState({
            intervalId: interval
        });
    }

    handleZoom = (e) => {
        this.setState({
            // eslint-disable-next-line no-underscore-dangle
            zoom: e.target._zoom
        });
    }

    componentDidMount = () => {
        this.setTimer();
        this.getPosition();
    }

    componentWillUnmount = () => {
        const { intervalId } = this.state;
        clearInterval(intervalId);
    }


    render() {
        const { lat, lng } = this.state;
        const position = [lat, lng];
        const { tileLayer } = this.props;
        // eslint-disable-next-line object-curly-newline
        const { centerLat, centerLng, zoom, handleZoom } = this.state;
        // show spinner while the map is loading//
        const { isLoaded } = this.state;
        if (!isLoaded) {
            return (
                <div className="spinner">
                    <ClapSpinner
                        size={50}
                        color="#686769"
                    />
                </div>
            );
        }
        return (
            <Map
                className="mapsizing"
                id="mapid"
                center={[centerLat, centerLng]}
                zoom={zoom}
                zoomControl
                onZoomend={handleZoom}
            >
                <TileLayer
                    url={tileLayer}
                />
                <Marker className="leaflet-div-icon" position={position} icon={iconISS} />
            </Map>
        );
    }
}

export default Leaflet;
