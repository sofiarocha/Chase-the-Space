import React, { Component } from 'react';
import YouTube from 'react-youtube';
import SideGallery from './SideGallery';
import MoreInfoButton from './MoreInfoButton';

const getWeekDates = () => {
    const weekDays = [0, 1, 2, 3, 4, 5, 6];
    const today = new Date();
    const todayDay = today.getTime();
    const weekDaysDate = weekDays.map((day) => {
        const week = (todayDay - day * 24 * 60 * 60 * 1000);
        return `${new Date(week).getFullYear()}-${new Date(week).getMonth() + 1}-${new Date(week).getDate()}`;
    });
    return weekDaysDate;
};

class APOD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPod: {},
            weekApod: []
        };
    }

    onShowWeekGallery = () => {
        getWeekDates().forEach((date) => {
            const dayUrl = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=DV4ZLxIJ4QeI9eIXsHYlutwXWI8SwPNwRkbagwWt`;
            fetch(dayUrl)
                .then(response => response.json())
                .then((data) => {
                    this.setState((state) => {
                        return {
                            weekApod: [...state.weekApod, data],
                            selectedPod: state.weekApod[0]
                        };
                    });
                    //do a new setState for selected Pod if date = today date
                });
        });
    }

    componentDidMount = () => {
        this.onShowWeekGallery();
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        return nextState.weekApod.length === 7;
    }

    render () {
        const { selectedPod, weekApod } = this.state;
        const opts = {
            height: '100%',
            width: '100%',
        };
        const podStyle = {
            background: `center / contain no-repeat url("${selectedPod.url}")`
        };
        return (
            <div className="apod-page">
                <div className="pod">
                    {selectedPod.media_type === "video"
                        ? (
                            <div className="video-pod">
                                <YouTube videoId={selectedPod.url.replace("https://www.youtube.com/embed/", "")} opts={opts} />
                            </div>
                        )
                        : <div className="image-pod" style={podStyle} /> }
                    <MoreInfoButton pod={selectedPod} />
                </div>
                <div className="week-pictures">
                    <SideGallery weekApod={weekApod} />
                </div>
            </div>
        );
    }
}

export default APOD;
