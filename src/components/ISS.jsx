import React, { Component } from 'react';
import Leaflet from './Leaflet';
import Sidebar from './Sidebar';
import MapList from './MapList';

const availableMaps = [
    {
        src: "https://res.cloudinary.com/dl2ribpco/image/upload/v1557425121/ChaseTheSpace/template_primary1_iqxyxa.png", 
        tileLayer: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    },
    {
        src: "https://res.cloudinary.com/dl2ribpco/image/upload/v1557425121/ChaseTheSpace/template_primary2_uzyyfd.jpg",
        tileLayer: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
    },
    {
        src: "https://res.cloudinary.com/dl2ribpco/image/upload/v1557425121/ChaseTheSpace/template_primary3_lctvdq.jpg",
        tileLayer: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
    },
    {
        src: "https://res.cloudinary.com/dl2ribpco/image/upload/v1557425121/ChaseTheSpace/template_primary4_jkociy.jpg",
        tileLayer: "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
    }
];


class ISS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMap: availableMaps[0],
            maps: availableMaps
        };
    }

    onClickedMap = (clickedMap) => {
        this.setState((state) => {
            return { selectedMap: clickedMap };
        });
    }


    render() {
        const { selectedMap, maps } = this.state;
        return (
            <div className="container issComponent">
                <div className="maplist-container">
                    <MapList maps={maps} onClickedMap={this.onClickedMap}/>
                </div>
                <div className="map-container">
                    <p>
                        International Space Station -- 28,000Km/h -- Orbit 92 minutes -- Orbits 15.5/day
                    </p>
                    <Leaflet tileLayer={selectedMap.tileLayer}/>
                </div>
                <div className="sidebar-container">
                    <Sidebar />
                </div>
            </div>
        );
    }
}


export default ISS;
