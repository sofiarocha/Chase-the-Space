import React, { Component } from 'react';
import Leaflet from './Leaflet';
import Sidebar from './Sidebar';
import MapList from './MapList';

const availableMaps = [
    {
        src:"https://res.cloudinary.com/dl2ribpco/image/upload/v1557343515/ChaseTheSpace/Sem_T%C3%ADtulo1_yineiu.png", 
        tileLayer:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    },
    {
        src:"https://res.cloudinary.com/dl2ribpco/image/upload/v1557392939/ChaseTheSpace/Screenshot_from_2019-05-09_10-05-38_yqrc1j.png",
        tileLayer:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
    },
    {
        src:"https://res.cloudinary.com/dl2ribpco/image/upload/v1557343515/ChaseTheSpace/Sem_T%C3%ADtulo3_cyuj4k.png",
        tileLayer:"https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
    },
    {
        src:"https://res.cloudinary.com/dl2ribpco/image/upload/v1557408278/ChaseTheSpace/Screenshot_from_2019-05-09_14-22-33_kus14z.png",
        tileLayer:"https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
    }
]


class ISS extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedMap: availableMaps[0],
            maps: availableMaps
        }
    }

    onClickedMap = clickedMap => {
        this.setState(state => {
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
                    <p>The International Space Station is moving at close to 28,000 Km/h. It circles the Earth in roughly 92 minutes and completes 15.5 orbits per day.
                    Where is it right now?</p>
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